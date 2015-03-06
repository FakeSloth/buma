# Setup

The first step is to setup all project structure and dependencies 
to start this project.

## Table of Contents

- [Initial Files](#initial-files)
- [MongoDB](#mongodb)
- [App Configuration](#config)
- [Bower](#bower)
- [Grunt](#grunt)
- [Depedencies](#dependencies)

Initial Files
-------------

We used `git init` to start a git repository and `npm init` to create a 
`package.json` file.
`server.js` will be the main file used and it is the center of the app. It 
will start the application, loading all dependencies and routes. 
We also created a `config/config.js` file to hold all our configuration 
variables.

MongoDB
-------

We are using the MongoDB NoSql database. If you haven't mess around with 
MongoDB yet, here is a good [introduction][mongodb] to it.

App Configuration
-----------------

We are using [Jade][jade] to render out to html. This has many advantages like 
template inheritance, looping, and other great stuff.

Jade will minify the html as a default but in development we don't want Jade 
to minify html so we set it to pretty to do this. Morgan is a logger to tell 
us what files loaded and how long it took in the console.

Body parser is for being able to parse form requests and json.
Static files are for CSS, JavaScript, and images file being using on the 
client. CORS requests being enabled are for json web token authentication.


TODO: error handlers

[mongodb]: https://scotch.io/tutorials/an-introduction-to-mongodb
[jade]: http://jade-lang.com
