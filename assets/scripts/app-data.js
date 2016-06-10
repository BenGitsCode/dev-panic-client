'use strict';

// api:'https://dev-panic.herokuapp.com',
const server = {
  api:'http://localhost:3000',
  };

  let currentUser = {
    token: 'undefined',
    id: '',
  };

module.exports = {
  server,
  currentUser
};
