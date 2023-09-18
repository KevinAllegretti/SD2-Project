const questionDiv = document.getElementById("question-div");
const questionInput  = document.getElementById("questionInput");
const questionButton = document.getElementById("questionButton");

const userList = document.getElementById("user-list");

var currentUser = null;

function getQuestions(){
    fetch("/api/question",{
        method: "GET",
        headers: [["Content-Type","application/json"]],
    })
    .then((response)=>{
        response.json().then(json=>{
            console.log("questions", json)
            renderQuestions(json)
        })
    })
}

function renderQuestions(questions){
    questionDiv.innerHTML = " ";

    for (var question of questions){
        var div = document.createElement("div")
        var p11 = document.createElement("p11") 
        var p12 = document.createElement("p12") 
        p11.innerText = question.author + ": " + question.questiontext;
        p12.innerText = "Posted at: " + question.questiontime;

        div.appendChild(p11);
        div.appendChild(p12);
        questionDiv.appendChild(div);
    
    }

}
getQuestions();

questionButton.addEventListener("click", function() {
    var author = currentUser;
    var questiontext = questionInput.value;
    var date = new Date().toDateString();

    fetch("/api/question",{
        method: "POST",
        headers: [["Content-Type","application/json"]],
        body: JSON.stringify({
            author: author,
            questiontext: questiontext,
            questiontime: date
        })
    }).then((response)=>{
        response.json().then(json=>{
            console.log("questions", json)
            renderQuestions(json)
            alert("Question Submitted")
        })
    })
} );

function getUsers(){
    fetch("/api/user",{
        method: "GET",
        headers: [["Content-Type","application/json"]],
    })
    .then((response)=>{
        response.json().then(json=>{
            console.log("users", json)
            renderUserLinks(json)
        })
    })
}

function renderUserLinks(users){
    userList.innerHTML = "";
    for (var user of users){
        var userButton = document.createElement("button");
        userButton.innerText = user.firstname + " " + user.lastname;
        
        userList.appendChild(userButton)
        userButton.addEventListener("click", function() {
            changeUser(user)
        } );
    }
}

function changeUser(newUser){
    currentUser = newUser.firstname + " " + newUser.lastname;
    alert("Welcome "+ currentUser)
    document.getElementById("login-messager").innerText = "Logged in as: " + currentUser ;
}
getUsers()