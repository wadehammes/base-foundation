Base Foundation (v2)
===

#####PRIOR TO FIRST USE (if you don't have these below installed already):
You will need to make sure you have the following installed to your machine (via Terminal):

Install NPM first:
<a href="http://nodejs.org/download/">http://nodejs.org/download/</a>

Then Bower:
```
$ npm install -g bower
```

And Bourbon:
```
$ sudo gem install -g bourbon
```

#####AFTER ABOVE DEPENDENCIES ARE INSTALLED:

Clone this repo into your code directory and copy it to your project:
```
$ cd your/development/directory/
$ git clone git@github.com:wadehammes/base-foundation.git
// Move them into your project directory
$ cp -i base-foundation /your/project/directory/
```

<b>NOTE: you may have to precede these next commands with 'sudo' if they are ERRoring on you.</b>

Install the Node Modules into the project:
```
$ npm install -g gulp
$ npm install
```

<b>NOTE: if you get an error about node-sass not being installed, take a look at this Stack Overflow (and the answer):</b>
<a href="http://stackoverflow.com/questions/29461831/libsass-bindings-not-found-when-using-node-sass-in-nodejs">http://stackoverflow.com/questions/29461831/libsass-bindings-not-found-when-using-node-sass-in-nodejs</a>

```
$ npm rebuild
```

Install the Bower dependencies into the project:
```
$ bower install
```

Install the Bourbon library:
```
$ bourbon install
$ bourbon update
```

Run Gulp:
```
$ gulp
```

Your project should compile successfully.

##### In order to optimize your SVG
```
$ gulp svg
```

##### In order to optimize your images
```
$ gulp images
```

##### In order to update packages:
```
$ bourbon update
$ bower update
$ npm update
```

Using this to build
===

All theme dev is done in the assets/ directory.
