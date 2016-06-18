#!/usr/bin/env bash

dir=$(cd $(dirname $0); pwd)
cd $dir


cd ../
~/.pyenv/bin/pyenv exec python ./manage.py runserver &

cd ./ui
gulp watch &

sleep 3
open -aSafari "http://127.0.0.1:8000/"

trap "kill -TERM -$$" SIGINT
wait
