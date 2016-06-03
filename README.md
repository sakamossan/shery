# shery

[NMB48の山本彩、「ニートの主食はドッグフード」と問題発言！](http://www.officiallyjd.com/archives/57750/)

## setup

```bash
$ brew install pyenv
$ brew install pyenv-virtualenv
$ pyenv install anaconda3-2.4.0  # python3
$ pyenv global  anaconda3-2.4.0
$ pyenv virtualenv shery && cd $_
$ mkdir log
$ git clone xxxxx shery && cd $_
$ pip install -r requirements.txt
$ echo "xxxxxxxxxxx" | tee shery/secret.py
$ ./scripts/reset.sh
$ ./manage.py get_genres
$ ./manage.py get_items
$ ./manage.py bigger_image_size
```
