'use strict';

const app = {
  api:'https://dev-panic.herokuapp.com',
  };

  let currentUser = {
    token:'',
    id: undefined,
    username: undefined
  };

module.exports = {
  app,
  currentUser
};
