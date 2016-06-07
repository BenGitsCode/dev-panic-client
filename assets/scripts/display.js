'use strict';

let displaySolutions = function(solutions){
  console.log(solutions);
    // $('.landing-div').hide(); //this hides the landing page div
    // $('.show-solutions').html(''); //this clears the content in my table html
  let solutionsListingTemplate = require('./templates/show-solutions.handlebars');
    $('.show-solutions').append(solutionsListingTemplate({
      symptom : solutions.symptom
    }));
};





module.exports = {
  displaySolutions
};
