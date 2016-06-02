# shery-client

[「朴槿恵の犬はドッグフードでも食ってろ」朴容疑者、警察にドッグフードを送りつける](http://news.mikimedia.net/entry/2015/03/06/105600)

```bash
brew install nvm
mkdir ~/.nvm
echo 'export NVM_DIR=~/.nvm' >> ~/.bash_profile
echo 'source $(brew --prefix nvm)/nvm.sh' >> ~/.bash_profile
nvm install 4.4.5
nvm use 4.4.5
nvm alias default 4.4.5
npm install --save-dev gulp karma browserify babelify karma-browserify karma-jasmine karma-phantomjs-launcher
cd app && npm install
./node_modules/gulp/bin/gulp.js test
```