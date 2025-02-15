# TODO app

This is a sample web app made for Chingu voyage's personal project requirement.

## Overview

- User can log in and view their todo items.
- New todo items can be added using the frontend.
- New users can be added by making a POST http request to [/users](todo-1.wyx8.onrender.com/users) route.
- List of users can be seen by making a GET request to the `/users` route.
- live website [here](https://todo-1-wyx8.onrender.com)

## Dependencies

- vite
- react
- prettier
- eslint
- mongoose
- express
- jsonwebtoken
- axios
- bcrypt
- dotenv

## Future work

New users cannot sign up in this web app using a sign up form.

## Feature varification

Use these usernames and passwords for checking the functionalities:

User 1:

- username: vatsal
- password: vatsal

User 2:

- username: mavani
- password: mavani

## Running the project locally

- Go to the `/backend` folder and run `npm install` command.
- Use a .env file with the following items:
  1. PORT
  2. MONGODB_URI
  3. SECRET
- Run the project using `npm start`
