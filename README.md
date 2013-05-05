iris-todomvc
============

An Iris example application using Grunt.

You must install Nodejs and Grunt to run this project.

To install all node dependencies execute: `$ npm install`


* `$ grunt` Executes: jshint, clean, copy, uglify, iris-tmpl. All source code is minified and iris' templates are concaneted using the custom task named <b>iris-tmpl</b>

```
$ grunt
Running "jshint:all" (jshint) task
>> 5 files lint free.

Running "clean:0" (clean) task
Cleaning "dist"...OK

Running "copy:main" (copy) task
Created 4 directories, copied 12 files

Running "uglify:build" (uglify) task
File "dist/app/init.js" created.

Running "iris-tmpl" task
Concatenate Iris templates...
Configurations: pkg.iris.baseUri[src/app/] pkg.iris.init[dist/app/init.js]
File "dist/app/init.js" saved.

Done, without errors.
```

* `$ grunt devserver` Use this command to test and develop the web application. This command executes: jshint, connect:dev, watch. You can test the application typing into your browser: <i>http://localhost:8000/</i>

```
$ grunt devserver
Running "jshint:all" (jshint) task
>> 5 files lint free.

Running "connect:dev" (connect) task
Started connect web server on localhost:8000.

Running "watch" task
Waiting...
```

* `$ grunt distserver` Executes the default task and initialises a local server to test the released website. You can test the application typing into your browser: <i>http://localhost:8000/</i>

```
$ grunt distserver
Running "jshint:all" (jshint) task
>> 5 files lint free.

Running "clean:0" (clean) task
Cleaning "dist"...OK

Running "copy:main" (copy) task
Created 4 directories, copied 12 files

Running "uglify:build" (uglify) task
File "dist/app/init.js" created.

Running "iris-tmpl" task
Concatenate Iris templates...
Configurations: pkg.iris.baseUri[src/app/] pkg.iris.init[dist/app/init.js]
File "dist/app/init.js" saved.

Running "connect:dist" (connect) task
Started connect web server on localhost:8000.

Running "watch" task
Waiting...
```

For more information visit [thegameofcode.com post](http://www.thegameofcode.com/2013/05/front-end-with-iris-nodejs-gruntjs.html).


Template: [TodoMVC](http://todomvc.com) created by [Sindre Sorhus](http://sindresorhus.com).
