# Setup

The first step is to setup all project structure and dependencies 
to start this project.

## Table of Contents

- [Initial Files](#initial-files)
- [MongoDB](#mongodb)
- [Depedencies](#dependencies)

<a name="initial-files" />
## Initial Files

First, I want to setup the site to get it up and running. 
I used `git init` to start a git repository and `npm init` to create a 
`package.json` file.
`server.js` will be the main file used for being the center of app. It 
will start the application, loading all dependencies and routes. 
I also created a `config/config.js` file to hold all our configuration 
variables.

<a name="mongodb" />
## MongoDB

We are using the MongoDB NoSql database. If you haven't mess around with 
MongoDB yet, here is a good [introduction](MongoDB) to it.

[MongoDB]: https://scotch.io/tutorials/an-introduction-to-mongodb