// require userModel module
const questionModel = require('../model/question');
const questionService = require("../service/questionService")


// output to the log that the module is loaded successfully!
console.log("[questionController] initialized");


// create an array to hold the created users
let questions = [];

// create a user
let question1 = questionModel.createQuestion("Kevin", "QUESTION??", "8:00 may 10th");

// add the user to the array
questions.push(question1);


// send entire users array as the body of the response as json
exports.getAllQuestions = async (req, res) => {
  questions = await questionService.getQuestions() || questions;

  res.setHeader('Content-Type', 'application/json');
  res.send(questions);
}

// retrieve the user in the :index parameter of the request and return as json
exports.getQuestions = async (req, res) => {
    questions = await questionService.getQuestions() || questions;

    res.setHeader('Content-Type', 'application/json');
    res.send(questions[req.params.questionId]);
}

  // save a user
exports.saveQuestions = async (req, res) => {
    questions = await questionService.getQuestions() || questions;

    let newQuestion = questionModel.createQuestion(req.body.author, req.body.questiontext,req.body.questiontime);
    questions.push(newQuestion);
    res.setHeader('Content-Type', 'application/json');
    res.send(questions);
    questionService.updateList(questions)

}

exports.updateQuestion = async function(req, res) {
    questions = await questionService.getQuestions() || questions;

	// get the existing user from the array
	var updatedQuestion = users[req.params.questionId];
	// check to see what has been passed and update the local copy
	if(req.body.author)
		updatedQuestion.author = req.body.author;
	if(req.body.questiontext)
		updatedQuestion.questiontext = req.body.questiontext;
	if(req.body.questiontime)
		updatedQuestion.questiontime = req.body.questiontime;
	// save the local copy of the user back into the array
	questions[req.params.questionId] = updatedQuestion;
	res.setHeader('Content-Type', 'application/json');
	res.send(questions[req.params.questionId]);
    questionService.updateList(questions)

}

exports.deleteQuestion = async function(req, res) {
    questions = await questionService.getQuestions() || questions;

    question.splice(req.params.questionId, 1);
    res.setHeader('Content-Type', 'application/json');
	res.send(questions);
    questionService.updateList(questions)


}
