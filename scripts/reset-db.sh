#!/usr/bin/env bash

rm -f sqlite/default.sqlite3
rm -rf rakuten/migrations
./manage.py makemigrations rakuten
./manage.py migrate
./manage.py get_genre