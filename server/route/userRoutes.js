let userController = require('../controller/userController');


console.log("[userRoutes] initialized");

// require the express library
var express = require('express');
var router = express.Router();

// all users routes
router.route('/')
.get( ( req, res ) => {
userController.getAllUsers( req, res );
})
.post( ( req, res ) => {
userController.saveUser( req, res );
}
);

router.route('/:userId')
  // get a specific user by ID
  .get(function(req, res) {
    // Code to retrieve user with the specified ID from database
    userController.getUser( req, res );
  })
  // put a complete update to a specific user by ID
  .put(function(req, res) {
    userController.updateUser(req, res)
    res.send(updatedUser);
  })
  // patch a partial update to a specific user by ID
  .patch(function(req, res) {
    userController.updateUser(req, res)
    // Code to update user with the specified ID in database
  })
  // delete a specific user by ID
  .delete(function(req, res) {
    // Code to delete user with the specified ID from database
    userController.deleteUser(req, res);
  });

module.exports = router;