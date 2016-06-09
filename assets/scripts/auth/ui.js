'use strict';

const app = require('../app-data');
const display = require('../display');
const authApi = require('./ui');

//currentUser object set on successful sign-in
let currentUser = {
  token:'',
  id: undefined,
  username: undefined
};

// USER CRUD SUCCESSES

// SIGNUP SUCCESSES

const signUpSuccess = () => {
  console.log('You signed-up');
  $('#sign-up-modal').modal('hide');
  authApi.signIn(signInSuccess, signInFailure, app.server.signUpData);
};

const signUpFailure = (error) => {
  console.error(error);
  $('#sign-up-modal').modal('hide');
  $('#sign-up-fail-modal').modal('show');
};

// SIGN IN SUCCESSES

const signInSuccess = (data) => {
  currentUser.token = data.user.token;
  currentUser.id = data.user.id;
  console.log('You signed-in');
  $('#sign-in-modal').modal('hide');
};

const signInFailure = (error) => {
  console.error(error);
  $('#sign-in-modal').modal('hide');
  $('#sign-in-fail-modal').modal('show');

};

const changePasswordSuccess = () => {
  console.log('changed password');
};

const signOutSuccess = () => {
  currentUser.token = '';
  currentUser.id = undefined;
  console.log('See YA signed out');
};

// SYMPTOMS AND SOLUTIONS

const newSymptomSuccess = () => {
  console.log('New Symptom Added');
  $('#new-symptom-modal').modal('hide');
  $('.landing-header').html('hide');
};

const failure = () => {
  console.log('failure');
};

const showSymptomsSuccess = (data) => {
  console.log(data);
};


const getSolutionsSuccess = (data) => {
  let solutionData = data.symptoms;
  console.log(solutionData);
  display.displaySolutions(solutionData);
};

const showSymptoms = (success, failure) => {
  $.ajax({
    method: "GET",
    url: app.api +'/users/' + currentUser.id +'/symptoms/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + currentUser.token
    },
  }
)
.done(success)
.fail(failure);
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  currentUser,
  success,
  changePwSuccess,
  changePwFailure,
  signUpFailure,
  signInFailure,
  failure,
  showSymptoms,
  showSymptomsSuccess,
  newSymptomSuccess,
  getSolutionsSuccess
};
