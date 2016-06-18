#!/usr/bin/env bash

dir=$(cd $(dirname $0); pwd)
cd $dir


cd ../
~/.pyenv/bin/pyenv exec python ./manage.py runserver &

cd ./ui
gulp watch &

trap "kill -TERM -$$" SIGINT
wait
