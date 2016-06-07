'use strict';

const app = require('../app-data');

//currentUser object set on successful sign-in
let currentUser = {
  token:'',
  id: undefined,
  username: undefined
};

const signUpSuccess = () => {
  console.log('You signed-up');
};

const signInSuccess = (data) => {
  currentUser.token = data.user.token;
  currentUser.id = data.user.id;
  currentUser.username = data.user.username;
  console.log('You signed-in');
  $('#sign-in-modal').modal('hide');
  console.log("Sign in successful");
  $('.page-content').removeClass('hidden');
  $('.landing-header').addClass('hidden');
  $('body').removeClass('bg-image');
};

const changePasswordSuccess = () => {
  console.log('changed password');
};

const signOutSuccess = () => {
  currentUser.token = '';
  currentUser.id = undefined;
  console.log('See YA signed out');
};

const newSymptomSuccess = () => {
  console.log('New Symptom Added');
  $('#new-symptom-modal').modal('hide');
};

const failure = () => {
  console.log('failure');
};

const showSymptomsSuccess = (data) => {
  console.log(data);
};


const getSolutionsSuccess = (data) => {
  let solutionData = data;
  return solutionData;
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
