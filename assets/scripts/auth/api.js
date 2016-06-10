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

const newSymptom = (success, failure, title, data) => {
  console.log(title, data);
  $.ajax({
    method: "POST",
    url: app.server.api +'/users/' + app.currentUser.id +'/symptoms/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + app.currentUser.token
    },
    data: {
      "symptom": {
        "title": data,
        "solution": title.symptom.solution,
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

// const getSymptoms = (success, failure, data) => {
//   $.ajax({
//     method: "GET",
//     url: app.server.api +'/symptoms/',
//     dataType: 'json',
//     headers: {
//       Authorization: "Token token=" + app.currentUser.token
//     },
//   })
//   .done(success)
//   .fail(failure);
// };


// ================================================

const newPass = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: "POST",
    url: app.server.api + '/passes/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + app.currentUser.token
    },
    data: {
      "pass": {
        "crud": data,
      }
    }
  })
  .done(success)
  .fail(failure);
};

const getPass = (success, failure, data) => {
  $.ajax({
    method: "GET",
    url: app.server.api +'/passes/',
    dataType: 'json',
    headers: {
      Authorization: "Token token=" + app.currentUser.token
    },
  })
  .done(success)
  .fail(failure);
};


const editPass = (success, failure, data, id) => {
  console.log(data, id);
  $.ajax({
    method: 'PATCH',
    url: app.server.api + '/symptoms/' + id,
    data: {
      "pass": {
      "crud": data.pass.crud
    }
  },
    headers:{
      Authorization: "Token token=" + app.currentUser.token,
    }
  }).done(success)
  .fail(failure);
};



const deletePass = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.server.api + '/passes/' + app.currentUser.id,
    headers: {
      Authorization: 'Token token=' + app.currentUser.token
    },
  }).done(success)
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
  getSolutions,
  newPass,
  deletePass,
  getPass,
  editPass,
};
