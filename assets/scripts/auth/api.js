'use strict';

const app = require('../app-data');
const ui = require('./ui');


//User CRUD
const signUp = (success, failure, data) => {
  console.log("API", data);
  $.ajax({
    method: "POST",
    url: app.api + '/sign-up/',
    data,
  })
  .done(success, data)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  console.log("API", data);
  $.ajax({
    method: "POST",
    url: app.api + '/sign-in/',
    data,
  })
  .done(success, data)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  $.ajax({
    method: "PATCH",
    url: app.api + '/change-password/' + ui.currentUser.id,
    data: {
      'passwords': {
        'old': data.pw_creds.old,
        'new': data.pw_creds.new
      }
    },
    headers: {
      contentType: "application.json",
      Authorization: "Token token=" + ui.currentUser.token
    },
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.api + '/sign-out/' + ui.currentUser.id,
    headers: {
      Authorization: 'Token token=' + ui.currentUser.token
    },
  }).done(success)
  .fail(failure);
};

// SYMPTOMS AJAX

const newSymptom = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api +'/users/' + ui.currentUser.id +'/symptoms/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + ui.currentUser.token
    },
    data: {
      "symptom": {
        "title": data.symptom.title,
        "solution": data.symptom.solution,
        "url": data.symptom.url,
        "media": data.symptom.media,
        "private": data.symptom.private,
      }
    }
  })
  .done(success)
  .fail(failure);
};



//Update Symptoms
const editSymptom = (success, failure, data, id) => {
  console.log(data, id);
  $.ajax({
    method: 'PATCH',
    url: app.api + '/symptoms/' + id,
    data,
    headers:{
      Authorization: "Token token=" + ui.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

//DELETE Symptoms
const deleteSymptom = (success, failure, data, id) => {
  console.log(data, id);
  $.ajax({
    method: 'DELETE',
    url: app.api + '/symptoms/' + id,
    data,
    headers:{
      Authorization: "Token token=" + ui.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const getSolutions = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api +'/get-solutions/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + ui.currentUser.token
    },
    data: {
      "symptom": {
        "title": data
      }
    }
  })
  .done(success)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  editSymptom,
  deleteSymptom,
  newSymptom,
  getSolutions
};
