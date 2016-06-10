'use strict';

const authApi = require('./auth/api');
const authUi = require('./auth/ui');
let solutionId;
let displaySolutions = function(solutions){
  console.log(solutions);
    // $('.landing-div').hide(); //this hides the landing page div
    // $('.show-solutions').html(''); //this clears the content in my table html
  let solutionsListingTemplate = require('./templates/show-solutions.handlebars');
    $('.show-solutions').append(solutionsListingTemplate({
      solutions : solutions
    }));
    $('.edit-solution-btn').on('click', function (event) {
      event.preventDefault();
      $('.edit-solution-modal').modal('show');
      solutionId = $(this).data('id');
    });
      // deleteSymptom
      $('#delete-btn').on('click', function (event) {
        event.preventDefault();
        let solutionId = $(this).data('id');
        authApi.deleteSymptom(authUi.deleteSymptomSuccess, authUi.failure, solutionId);
        displaySolutions();
      });
};
$('#edit-symptom').on('submit', function(event) {
  event.preventDefault();
  let newSolution = getFormFields(this);
  $('.edit-solution-modal').modal('hide');
  authApi.editSolution(authUi.editSolutionSuccess, authUi.editSolutionFailure, newSolution, solutionId);
});





module.exports = {
  displaySolutions,
};
