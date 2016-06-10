'use strict';

require('./example');
const authApi = require('./auth/api');
const authUi = require('./auth/ui');
const getFormFields = require('../../lib/get-form-fields');
const app = require('./app-data');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

$('#sign-up').on('submit', function (event){
  event.preventDefault();
  let data = getFormFields(this);
  console.log(data, 'sign-up submitted');
  app.server.signUpData = getFormFields(this);
  authApi.signUp(authUi.signUpSuccess, authUi.SignUpFailure, data);
});

$('#sign-in').on('submit', function (event){
  let data = getFormFields(this);
  console.log(data, 'sign-in submitted');
  event.preventDefault();
  authApi.signIn(authUi.signInSuccess, authUi.signInFailure, data);
});

$('#change-password').on('submit', function(event){
  let data = getFormFields(this);
  console.log('change password submitted');
  event.preventDefault();
  authApi.changePassword(authUi.changePwSuccess, authUi.changePwFailure, data);
});

$('#sign-out').on('click', function(event){
  event.preventDefault();
  authApi.signOut(authUi.signOutSuccess, authUi.failure);
});


// SYMPTOM actions

  $('.show-symptoms').on('click', function (event) {
    event.preventDefault();
    authUi.showSymptoms(authUi.showSymptomsSuccess, authUi.failure);
    console.log(authUi.currentUser);
  });

  $('#new-symptom').on('submit', function (event) {
    console.log("test");
    event.preventDefault();
    let title = $('#symptom-select option:selected').text();
    let data = getFormFields(this);
    console.log("submit");
    authApi.newSymptom(authUi.newSymptomSuccess, authUi.failure, data, title);
  });

  // sets the title to be called from API
  $('#symptom-drop').on('submit', function (event) {
    event.preventDefault();
    let title = $('#symptom-select option:selected').text();
    authApi.getSolutions(authUi.getSolutionsSuccess, authUi.failure, title);
    console.log(title);
  });



  // CRUD CRUD
  $('#new-crud').on('submit', function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  authApi.newPass(authUi.success, authUi.failure, data);
  console.log(data);
  authUi.showPasses();
  });

  
