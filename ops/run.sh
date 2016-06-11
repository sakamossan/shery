#!/usr/bin/env bash

cd /shery/shery && ~/.pyenv/bin/pyenv exec gunicorn -w 4 -b 127.0.0.1:8000 project.wsgi:application
