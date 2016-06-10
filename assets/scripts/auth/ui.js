'use strict';

const app = require('../app-data');
const display = require('../display');
const authApi = require('./api');
const server = require('../app-data');

//currentUser object set on successful sign-in
let currentUser = {
  token:'',
  id: undefined,
  username: undefined
};

// USER CRUD SUCCESSES

const success = (data) => {
  console.log(data);
};

// SIGNUP SUCCESSES


// SIGN IN SUCCESSES

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user.id;
  console.log('You signed-in');
  $('#sign-in-modal').modal('hide');
  $('.landing-header').addClass('hidden');
  $('.main-page').removeClass('hidden');
};

const signInFailure = (error) => {
  console.error(error);
  $('#sign-in-modal').modal('hide');
  $('#sign-in-fail-modal').modal('show');

};

const signUpSuccess = () => {
  console.log('You signed-up');
  $('#sign-up-modal').modal('hide');
  authApi.signIn(signInSuccess, signInFailure, app.server.signUpData);
};

// Line 43 ensures Auto Sign In on successful signup

const signUpFailure = (error) => {
  console.error(error);
  $('#sign-up-modal').modal('hide');
  $('#sign-up-fail-modal').modal('show');
};

const changePwSuccess = () => {
  console.log("Password change successful!");
  $('#change-password-modal').modal('hide');
  $('#change-password').each(function() {
    this.reset();
    //THIS needs to change to hide in BS
  });
};

const changePwFailure = (error) => {
  console.error(error);
  $('#change-password-modal').modal('hide');
  $('#change-password-fail-modal').modal('show');
};

const signOutSuccess = () => {
  app.currentUser.token = null;
  app.currentUser.id = null;
  console.log('See YA signed out');
  $('#sign-out-modal').modal('hide');
  $('.landing-header').removeClass('hidden');
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

const editSolutionSuccess = () => {
  console.log("edited success");
};

const deleteSymptomSuccess = () => {
  console.log("deleted");
};


const getSolutionsSuccess = (data) => {
  let solutionData = data.symptoms;
  console.log(solutionData);
  display.displaySolutions(solutionData);
};

const showSymptoms = (success, failure) => {
  $.ajax({
    method: "GET",
    url: server.api +'/users/' + currentUser.id +'/symptoms/',
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
  getSolutionsSuccess,
  editSolutionSuccess,
  deleteSymptomSuccess
};
