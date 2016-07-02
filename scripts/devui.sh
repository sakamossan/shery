#!/usr/bin/env bash

dir=$(cd $(dirname $0); pwd)
cd $dir


cd ../
~/.pyenv/bin/pyenv exec python ./manage.py runserver &

cd ./ui
gulp watch &

OK=1
while [ $OK -ne 0 ]; do
    sleep 1
    curl -s "http://127.0.0.1:8000/" > /dev/null
    OK=$?
done
open -aSafari "http://127.0.0.1:8000/"

trap "kill -TERM -$$" SIGINT
wait
