# Gulp Babel React - Starter Kit

This is a starter kit for developing with gulp (http://gulpjs.com/), babel (https://babeljs.io) and react (https://facebook.github.io/react/)


## Getting Started

`$ git clone https://github.com/watzak/gulp-babel-react-starter-kit.git`

`$ cd gulp-babel-react-starter-kit`

`$ sudo npm install -g gulp-cli`        # Install Gulp task runner globally

`$ sudo npm install`                    # Install dependencies



## Build

`$ npm run build`                       # or, `gulp default`

Automatically opens `localhost:3000` to view the project.



## Possible Errors during launching app

> error: emfile, open 'node_modules/react/package.json

`$ ulimit -n 2560`                      # Resolves the issue for me on OSX