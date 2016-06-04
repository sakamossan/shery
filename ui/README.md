# shery

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

```bash
$ npm install -g yo grunt-cli bower
$ npm install -g generator-angular
$ yo angular --minsafe shery
$ sudo gem update --system
$ sudo gem install compass
$ npm install \
  grunt-karma \
  karma \
  karma-phantomjs-launcher \
  karma-jasmine \
  jasmine-core \
  phantomjs-prebuilt --save-dev
```

and Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
