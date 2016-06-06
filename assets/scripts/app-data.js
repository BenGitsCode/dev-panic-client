'use strict';

const server = {
  api: 'https://localhost:3000',
  };

  let currentUser = {
    id: undefined,
    token:''
  };

  let currentDirectory = "home";

module.exports = {
  server,
  currentUser,
  currentDirectory
};
