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

I used `git init` to start a git repository and `npm init` to create a 
`package.json` file.
`server.js` will be the main file used and it is the center of the app. It 
will start the application, loading all dependencies and routes. 
I also created a `config/config.js` file to hold all our configuration 
variables.

MongoDB
-------

We are using the MongoDB NoSql database. If you haven't mess around with 
MongoDB yet, here is a good [introduction](1) to it.

<a name="config" />
## App Configuration

We are using [Jade](2) to render out to html. This has many advantages like 
template inheritance, looping, and other great stuff.

TODO: more app config and error handlers

[1]: https://scotch.io/tutorials/an-introduction-to-mongodb
[2]: http://jade-lang.com
