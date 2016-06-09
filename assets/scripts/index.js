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
    event.preventDefault();
    let data = getFormFields(this);
    authApi.newSymptom(authUi.newSymptomSuccess, authUi.failure, data);
    console.log(data);
  });

  // sets the title to be called from API
  $('#symptom-drop').on('submit', function (event) {
    event.preventDefault();
    let title = $('#symptom-select option:selected').text();
    authApi.getSolutions(authUi.getSolutionsSuccess, authUi.failure, title);
    console.log(title);
  });

  $('#edit-symptom').on('submit', function (event) {
  event.preventDefault();
  let id = $('.edit-symptom-btn').attr("data-symptom-id");
  let data = getFormFields(this);
  console.log(data);
  authApi.editSympton(authUi.editSymptomSuccess, authUi.failure, data, id);
});

  $('.content').on('click', '.edit-symptom', function (event) {
  // 'button' would also work, this is targeting the button with edit-symptom class
  event.preventDefault();
  console.log($(this).attr('data-symptom-id'));
  let id = $(event.target).attr("data-symptom-id");
  $('.edit-symptom-btn').attr("data-symptom-id", id);
  // lines 72-73 define id as the attribute of clicked td
  // console.log(event.target);
});
