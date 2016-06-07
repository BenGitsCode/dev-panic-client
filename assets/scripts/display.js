'use strict';

let displaySolutions = function(solutions){
    // $('.landing-div').hide(); //this hides the landing page div
    $('.show-solutions').html(''); //this clears the content in my table html
  let solutionsListingTemplate = require('../templates/show-solutions.handlebars');
  console.log("display solutions");
    $('.content').append(solutionsListingTemplate({
      solutions : solutions.solutions
    }));
};





module.exports = {
  displaySolutions
};
