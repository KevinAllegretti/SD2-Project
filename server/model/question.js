class Question {
    constructor(author, questiontext, questiontime) {
      this.author = author;
      this.questiontext = questiontext;
      this.questiontime = questiontime;
    }
}


exports.createQuestion = function(author, questiontext, questiontime){
    return new Question(author, questiontext, questiontime)
} 

console.log('Question loaded');