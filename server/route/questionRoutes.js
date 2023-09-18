let questionController = require('../controller/questionController');


console.log("[questionRoutes] initialized");

// require the express library
var express = require('express');
var router = express.Router();

// all users routes
router.route('/')
.get( ( req, res ) => {
questionController.getAllQuestions( req, res );
})
.post( ( req, res ) => {
    questionController.saveQuestions( req, res );
}
);

router.route('/:questionId')
  // get a specific user by ID
  .get(function(req, res) {
    // Code to retrieve user with the specified ID from database
    questionController.getQuestions( req, res );
  })
  // put a complete update to a specific user by ID
  .put(function(req, res) {
    questionController.updateQuestion(req, res)
    res.send(updatedUser);
  })
  // patch a partial update to a specific user by ID
  .patch(function(req, res) {
    questionController.updateQuestion(req, res)
    // Code to update user with the specified ID in database
  })
  // delete a specific user by ID
  .delete(function(req, res) {
    // Code to delete user with the specified ID from database
    questionController.deleteQuestion(req, res);
  });

module.exports = router;