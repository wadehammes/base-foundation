Base
======
Base Foundation is a template framework based on the <a href="http://foundation.zurb.com">Foundation</a>, which utilizes <a href="http://sass-lang.com">SASS</a>, and is meant to be a starting point for a website build. It utilizes <a href="http://gruntjs.com/">Grunt</a>, which handles tasks such as CSS minification and prefixing, SASS compilation, and JS concatenation and uglifying.

####PRIOR TO USAGE:
You will need to make sure you have the following installed to your machine (via Terminal):

Install NPM first:
<a href="http://nodejs.org/download/">http://nodejs.org/download/</a>

Then Grunt:
<a href="http://gruntjs.com/getting-started">http://gruntjs.com/getting-started</a>

Then Bower:
<code>$ sudo gem install -g bower</code>

After that, install some other dependencies:
<code>$ sudo gem install -g sass</code>

Once you are ready to compile the project, download these files as a zip, decompress, and move them to your project directory. Then, in terminal:
<code>$ cd your/project/directory</code>

Install the Node Modules into the project:
<code>$ npm install</code>

Install the Bower dependencies into the project:
<code>$ bower install</code>

Initiate Grunt:
<code>$ grunt</code>

Your project should compile, and you will recieve notifications of things changing.

Start building something awesome.

####OTHER TIDBITS:
- Use scss/project/global for creating style guide classes and other reusuable, global elements.
- Use scss/project/media/screen.scss for screen styles
- Use scss/project/media/print.scss for print styles

The <code>templates/</code> directory is meant to be your www root here. Do your JS work in <code>js</code> and all your styling within <code>scss</code>. Grunt will handle the rest to ensure your templates have the necessary files.

####RELEASE LOG:
<a href="https://github.com/wadehammes/Base/releases">https://github.com/wadehammes/Base/releases</a>

####CONTRIBUTORS:
Special thanks to <a href="http://ca.linkedin.com/pub/simon-sarrasin/7/5b8/b0b">Simon Sarrasin</a> for the Javascript architecture
