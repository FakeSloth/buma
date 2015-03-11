# Authentication

We want to implement a authentication system which is login and signup. 
We will be using JSON web tokens for this. JSON web token is a compact 
URL-safe means of representing claims to be exchange. If you don't know 
what json web tokens are check out this [great article][jwt] about it.

[jwt]: https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication

## Table of Contents

- [Model](#model)

Model
-----

Using `mongoose` allows us to create a schema (aka template) for the user.
We have the standard email, username, and password fields. `uid` stands for
username id and it is just a faster way to get usernames by not having to
worry about letter casing. We use [bcrypt][bcrypt] to hash our passwords 
because storing passwords in plaintext is not a good idea.

We also have validation for username to meet certain critria and make sure
some fields are unique, we dont't want multiple users to have the same 
username.

[bcrypt]: http://en.wikipedia.org/wiki/Bcrypt
