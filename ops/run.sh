#!/usr/bin/env bash

sudo su - shery sh -c  "cd /shery/shery; /home/shery/.pyenv/bin/pyenv exec gunicorn -w 4 -b 127.0.0.1:8000 shery.wsgi:application"

# cd /shery/shery
# /home/shery/.pyenv/bin/pyenv exec gunicorn -w 4 -b 127.0.0.1:8000 shery.wsgi:application
