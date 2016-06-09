'use strict';

const app = require('../app-data');
const display = require('../display.js');

//currentUser object set on successful sign-in
let currentUser = {
  token:'',
  id: undefined,
  username: undefined
};

// USER CRUD SUCCESSES
const signUpSuccess = () => {
  console.log('You signed-up');
};

const signInSuccess = (data) => {
  currentUser.token = data.user.token;
  currentUser.id = data.user.id;
  console.log('You signed-in');
  $('#sign-in-modal').modal('hide');
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
  failure,
  showSymptoms,
  showSymptomsSuccess,
  newSymptomSuccess,
  getSolutionsSuccess
};
