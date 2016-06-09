'use strict';

const server = {
  api:'https://dev-panic.herokuapp.com',
  };

  let currentUser = {
    token:'',
    id: undefined,
  };

module.exports = {
  server,
  currentUser
};
