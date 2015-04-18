# Gulp Babel React - Starter Kit

This is a starter kit for developing with gulp (http://gulpjs.com/), babel (https://babeljs.io) and react (https://facebook.github.io/react/)


## Getting Started

```shell
$ git clone https://github.com/watzak/gulp-babel-react-starter-kit.git
$ cd gulp-babel-react-starter-kit
$ sudo npm install -g gulp-cli        # Install Gulp task runner globally
$ sudo npm install                    # Install dependencies
```


## Build

```shell
$ npm run build                       # or, gulp default
```
Automatically opens `localhost:3000` to view the project.



## Demo

![Alt Text](https://github.com/watzak/gulp-babel-react-starter-kit/blob/master/build.gif)



## Development Tools
- React (JavaScript library for building user interfaces)
- Gulp (JavaScript streaming build system and task automation)
- Babel (JavaScript compiler that turns ES6+ code into ES5 friendly code)
- BrowserSync (Lightweight HTTP server for development)



## Possible Errors during launching app

> error: emfile, open 'node_modules/react/package.json

`$ ulimit -n 2560`                      # Resolves the issue for me on OSX