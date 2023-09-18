// import and initizialize express
const bodyParser = require("body-parser");
const express = require( "express" );
const app = express();

app.use(bodyParser.json({ type: 'application/json' }));



//declare path
var path = require( "path" );

//Declaring the view and public path
const viewPath = "./client/" + process.env.FRONT_END_NAME + "/views";
const publicPath = "client/" + process.env.FRONT_END_NAME + "/public";

//asset access
app.use(express.static('client/public'));


let userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);

let questionRoutes = require('./route/questionRoutes');
app.use('/api/question', questionRoutes);


app.set( "views", path.join( __dirname, viewPath ) );
// open up the resources publically
app.use( express.static( publicPath ) );

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
  });

app.get('/main', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views/main.html'));
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});
