// require userModel module
const userModel = require('../model/user');
const userService = require("../service/userService")

// output to the log that the module is loaded successfully!
console.log("[userController] initialized");


// create an array to hold the created users
let users = [];

// create a user
let kevin = userModel.createUser("Kevin", "Allegretti");

// add the user to the array
users.push(kevin);


// send entire users array as the body of the response as json
exports.getAllUsers = async (req, res) => {
  users = await userService.getUsers() || users;
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
}

// retrieve the user in the :index parameter of the request and return as json
exports.getUser = async (req, res) => {
	users = await userService.getUsers() || users;

    res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.userId]);
}

  // save a user
exports.saveUser = async (req, res) => {
	users = await userService.getUsers() || users;

    let newUser = userModel.createUser(req.body.firstname, req.body.lastname);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
	userService.updateList(users)
}

exports.updateUser = async function(req, res) {
	users = await userService.getUsers() || users;

	// get the existing user from the array
	var updatedUser = users[req.params.userId];
	// check to see what has been passed and update the local copy
	console.log(req.body.firstname);
	if(req.body.firstname)
		updatedUser.firstname = req.body.firstname;
	if(req.body.lastname)
		updatedUser.lastname = req.body.lastname;
	if(req.body.email)
		updatedUser.email = req.body.email;
	// save the local copy of the user back into the array
	users[req.params.userId] = updatedUser;
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
	userService.updateList(users)

}

exports.deleteUser = async function(req, res) {
	users = await userService.getUsers() || users;

    users.splice(req.params.userId, 1);
    res.setHeader('Content-Type', 'application/json');
	res.send(users);
	userService.updateList(users)


}
