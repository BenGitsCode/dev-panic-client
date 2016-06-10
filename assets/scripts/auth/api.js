'use strict';

const app = require('../app-data');


//User CRUD
const signUp = (success, failure, data) => {
  console.log("API", data);
  $.ajax({
    method: "POST",
    url: app.server.api + '/sign-up/',
    data,
  })
  .done(success, data)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  console.log("API", data);
  $.ajax({
    method: "POST",
    url: app.server.api + '/sign-in/',
    data,
  })
  .done(success, data)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  // if (!app.currentUser) bad;
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/change-password/' + app.currentUser.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };

const signOut = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.server.api + '/sign-out/' + app.currentUser.id,
    headers: {
      Authorization: 'Token token=' + app.currentUser.token
    },
  }).done(success)
  .fail(failure);
};

// SYMPTOMS AJAX

const newSymptom = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server.api +'/users/' + app.currentUser.id +'/symptoms/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + app.currentUser.token
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
const editSolution = (success, failure, data, id) => {
  console.log(data, id);
  $.ajax({
    method: 'PATCH',
    url: app.server.api + '/symptoms/' + id,
    data: {
      "symptom": {
      "solution": data.symptom.solution
    }
  },
    headers:{
      Authorization: "Token token=" + app.currentUser.token,
    }
  }).done(success)
  .fail(failure);
};

//DELETE Symptoms
const deleteSymptom = (success, failure, id) => {
  $.ajax({
    method: 'DELETE',
    url: app.server.api + '/symptoms/' + id,
    headers:{
      Authorization: "Token token=" + app.currentUser.token,
    },
  }).done(success)
  .fail(failure);
};

const getSolutions = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server.api +'/get-solutions/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + app.currentUser.token
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
  editSolution,
  deleteSymptom,
  newSymptom,
  getSolutions
};
