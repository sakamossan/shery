# shery

[NMB48の山本彩、「ニートの主食はドッグフード」と問題発言！](http://www.officiallyjd.com/archives/57750/)

## setup

### install python3

```bash
$ xcode-select --install
$ git clone https://github.com/yyuu/pyenv.git ~/.pyenv
$ ~/.pyenv/bin/pyenv install 3.5.1
$ ~/.pyenv/bin/pyenv global 3.5.1
$ ~/.pyenv/bin/pyenv exec pip install --upgrade pip
```

### git clone shery

```
$ mkdir ~/shery && cd $_ 
$ mkdir log
$ git clone https://github.com/sakamossan/shery.git ~/shery/shery
$ echo "rakuten_api_app_id = 'xxxxxxxxxx'" | tee ~/shery/shery/shery/secret.py
$ ~/.pyenv/bin/pyenv exec pip install -r ~/shery/shery/requirements.txt
$ ~/.pyenv/bin/pyenv exec python ~/shery/shery/manage.py migrate
$ ~/.pyenv/bin/pyenv exec python ~/shery/shery/manage.py get_genres
$ ~/.pyenv/bin/pyenv exec python ~/shery/shery/manage.py get_items
$ ~/.pyenv/bin/pyenv exec python ~/shery/shery/manage.py bigger_image_size
```

### install node

```bash
$ curl -L git.io/nodebrew | perl - setup
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' | tee -a ~/.bashrc
$ nodebrew install-binary v4.4.5
$ nodebrew use v4.4.5
$ source ~/.bashrc
```

### build ui

```bash
$ cd ~/shery/shery/ui
$ npm install
$ gulp
$ ~/shery/shery/scripts/devui.sh
```
