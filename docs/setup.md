# Setup

The first step is to setup all project structure and dependencies 
to start this project.

## Table of Contents

- [Initial Files](#initial-files)
- [MongoDB](#mongodb)
- [App Configuration](#app-configuration)
- [Bower](#bower)
- [Depedencies](#dependencies)
- [Project Structure](#project-structure)
- [Running Locally](#running-locally)

Initial Files
-------------

Reference file(s): [`config/config.js`](../config/config.js), 
[`package.json`](../package.json), [`server.js`](../server.js)

We used `git init` to start a git repository and `npm init` to create a 
`package.json` file.
`server.js` will be the main file used and it is the center of the app. It 
will start the application, loading all dependencies and routes. 
We also created a `config/config.js` file to hold all our configuration 
variables.

MongoDB
-------

We are using the MongoDB NoSql database. MongoDB makes working with a database 
simple and elegant, providing agility and freedom to scale. The benefits of 
using a document database like MongoDB means that you can work with JSON-style 
documents in the frontend (client) and the backend (server).

To install MongoDB on your computer, see these [instructions][installation].

Before we can start creating and saving documents in our database, we have to 
start up MongoDB. There won’t be anything to save to if the service isn’t 
started! The command is very simple to get MongoDB up and running:

```bash
$ mongod
```

Once we have issue this command, MongoDB will start up and you should see: 
`waiting for connections on port 27017`.

In our node.js application, we are using `mongoose` to connect to a MongoDB 
database and it allows us to have access to the MongoDB commands.

[installation]: http://docs.mongodb.org/manual/installation

App Configuration
-----------------

Reference file(s): [`app`](../app) ,[`config/routes.js`](../config/routes.js), 
[`server.js`](../server.js)

We are using [Jade][jade] to render out to html. This has many advantages like 
template inheritance, looping, and other great stuff.

Jade will minify the html as a default but in development we don't want Jade 
to minify html so we set it to pretty to do this. Morgan is a logger to tell 
us what files loaded and how long it took in the console.

Body parser is for being able to parse form requests and json.
Static files are for CSS, JavaScript, and images file being using on the 
client. CORS requests being enabled are for json web token authentication.

Error handlers are for dealing with errors such as page not found or database 
errors.

We abstract our routes into a `config/routes.js` file and handle all routing 
interactions (request and responses) in the `app/controllers` folder. This is 
because once our application gets huge, it is much easier to keep track and 
manage all our routes this way.

[jade]: http://jade-lang.com

Bower
-----

Reference file(s): [`.bowerrc`](../.bowerrc) ,[`bower.json`](../bower.json)

We will used bower to manage frontend dependencies like bootstrap. To install 
bower, we used `npm install bower -g`.

First, we used `bower init` to generate a `bower.json` file. This is similar to 
the `package.json` where it contains the dependencies' name and it's version.
Then, we created a file called `.bowerrc`. The `.bowerrc` is to specify where 
we want the dependencies installed. In this case, we want it installed in the 
`public` folder. Bower creates a folder called `bower_compontents` that 
contains all our dependencies.

The first dependency we are going to installed is `bootstrap` using the 
command  `bower install bootstrap --save`. The `--save` is to specify saving 
it the `bower.json` file. Add `bower_components` in `.gitignore` as the user 
can just `bower install` the dependencies.

Dependencies
------------

Reference files: [`package.json`](../package.json)

Here are all the following dependencies we have so far and what they do:

| Package                  | Description                                                                   |
| ------------------------ |:-----------------------------------------------------------------------------:|
| bcrypt-nodejs            | Library for hashing and salting user passwords.                               |
| body-parser              | Node.js body parsing middleware.                                              |
| chalk                    | Get color and style in your node.js console.                                  |
| express                  | Fast, unopinionated, minimalist web framework.                                |
| jade                     | A clean, whitespace-sensitive template language for writing HTML              |
| mongoose                 | MongoDB object modeling tool designed to work in an asynchronous environment. |
| morgan                   | HTTP request logger middleware for node.js.                                   |

# Project Structure

Here is what the project should look like so far:

```
|---app/                      # application's MVC (Model View Controller) architecture
¦   |---controllers/          # handling routes
¦         main_controller.js  // handle index (/) routes
¦   |---views/
¦       |---layouts/          # base html templates
¦           error.jade        // 404 or 500 error page
¦           index.jade        // home page
|---config/
¦     config.js               // configuration variables
¦     routes.js               // routing
|---docs/                     # documentation
|---public/                   # static files
    |---bower_components/     # third-parties frontend libaries/frameworks
¦ bower.json                  // bower dependencies
¦ package.json                // npm dependencies
¦ server.js                   // application setup
```

Take a look at all the files at this [Git commit][git].

[git]: https://github.com/FakeSloth/buma/tree/71f906517e73fb7c8ab67bc45349fea92be3624d

Running Locally
---------------

If you want to run it locally:

```bash
$ mongod
```

Open another terminal or command prompt:

```bash
$ git clone -b setup https://github.com/FakeSloth/buma.git
$ cd buma
$ npm install && bower install
$ node server.js
```
