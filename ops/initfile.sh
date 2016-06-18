#!/usr/bin/env bash

set -eu


: "update apt" && {
    sudo apt-get update
    sudo apt-get -y upgrade
    curl -fsSL https://mackerel.io/assets/files/scripts/setup-apt.sh | sh
    sudo apt-get -y dist-upgrade

    sudo apt-get install -y \
        build-essential python-dev \
        openssl libssl-dev libssl-doc \
        libatlas-dev libatlas3gf-base \
        libreadline6 libreadline6-dev \
        zlib1g-dev libbz2-dev \
        libreadline-dev libsqlite3-dev \
        libncurses5-dev libncursesw5-dev \
        \
        bzip2 bash sqlite3 libsqlite3-dev \
        python-pip python-pycurl python-setuptools \
        nginx supervisor jq cpanminus \
        ntp htop git make llvm wget curl\
        language-pack-ja-base language-pack-ja \
        mackerel-agent mackerel-check-plugins

    sudo apt-get clean
    sudo apt-get -y autoremove
}

: "lang and locale" && {
    sudo /usr/sbin/update-locale LANG=ja_JP.UTF-8 LANGUAGE="ja_JP:ja"
    source /etc/default/locale
    echo $LANG

    sudo cp -f /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
    sudo sh -c 'echo "Asia/Tokyo" > /etc/timezone'
    sudo dpkg-reconfigure -f noninteractive tzdata
}

: "t2.micro" && {
    sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024
    sudo /sbin/mkswap /var/swap.1
    sudo /sbin/swapon /var/swap.1
}

: "user" && {
    sudo groupadd -g 500 shery
    sudo useradd -m -p '!!' -s '/bin/bash' --gid 500 --uid 500 shery
    sudo usermod -G adm shery
    sudo mkdir -p /shery/
    sudo chown shery:shery -R /shery
}

: "files2" && {
    sudo rm -rf /tmp/files2
    url=`cat /tmp/url`
    sudo su - shery sh -c "cd /tmp; git clone ${url} files2"
}

: "login $ ssh -i ~/.ssh/shery_rsa -vv shery@192.168.33.55" && {
    sudo mkdir /home/shery/.ssh
    sudo chmod 700 /home/shery/.ssh
    sudo cp /tmp/files2/authorized_keys /home/shery/.ssh/authorized_keys
    sudo chmod 600 /home/shery/.ssh/authorized_keys
    sudo chown shery:shery -R /home/shery/.ssh
    sudo sh -c "cat >> /etc/sudoers<<'EOF';
%shery ALL=(ALL) NOPASSWD:ALL
EOF"
}

: "python" && {
    sudo su - shery sh -c "git clone https://github.com/yyuu/pyenv.git ~/.pyenv"
    sudo su - shery sh -c "~/.pyenv/bin/pyenv install 3.5.0"
    sudo su - shery sh -c "~/.pyenv/bin/pyenv global 3.5.0"
    sudo su - shery sh -c "~/.pyenv/bin/pyenv exec pip install --upgrade pip"
    sudo su - shery sh -c "~/.pyenv/bin/pyenv exec pip install gunicorn"
}

: "project" && {
    sudo su - shery sh -c "mkdir -p /shery/{run,log,bin}"
    sudo su - shery sh -c "cd /shery; git clone https://github.com/sakamossan/shery.git"
#    sudo su - shery sh -c "cd /shery/shery; git checkout -b ops origin/ops"
    sudo su - shery sh -c "cp /tmp/files2/secret.py /shery/shery/shery/secret.py"
#    sudo su - shery sh -c "cp /tmp/files2/newrelic.ini /shery/shery/newrelic.ini"

    sudo su - shery sh -c "cd /shery/shery; ~/.pyenv/bin/pyenv exec pip install -r requirements.txt"
    sudo su - shery sh -c "cd /shery/shery; ~/.pyenv/bin/pyenv exec python ./manage.py migrate"
    sudo su - shery sh -c "cd /shery/shery; ~/.pyenv/bin/pyenv exec python ./manage.py collectstatic --noinput"

    sudo su - shery sh -c "ln -s /shery/shery/ops/run.sh /shery/bin/run.sh"
    sudo chmod +x /shery/bin/run.sh
}

: "middlewares" && {
    # nginx
    sudo rm -rf /etc/nginx/sites-{available,enabled}
    sudo rm -f /etc/nginx/conf.d/*
    sudo cp -f /shery/shery/ops/files/nginx/nginx.conf /etc/nginx/
    sudo cp -f /shery/shery/ops/files/nginx/conf.d/* /etc/nginx/conf.d/
    sudo service nginx stop
    sudo update-rc.d nginx disable

    # mackerel
    sudo cp -f /shery/shery/ops/files/mackerel-agent/mackerel-agent.conf /etc/mackerel-agent/mackerel-agent.conf
    cat /tmp/files2/mkr-apikey.ini /shery/shery/ops/files/mackerel-agent/mackerel-agent.conf | sudo tee /etc/mackerel-agent/mackerel-agent.conf
    sudo /etc/init.d/mackerel-agent start

    # supervisor
    sudo cp -f /shery/shery/ops/files/supervisor/conf.d/* /etc/supervisor/conf.d/
    sudo service supervisor restart

    # scp -i ~/.ssh/shery_rsa ./sqlite/* shery@{{ IP }}:/shery/shery/sqlite/
}
