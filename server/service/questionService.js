
// database connection
const db = require( '../db/connection' );


exports.getQuestions= async function( ) {
    console.log("Running query")
    let text = "SELECT * FROM questions ";
    let values = [  ];
    try {
         
        let res = await db.query( text, values );

        if( res.rowCount > 0 ) {
            return res.rows;
        }
        
        return null;
    }
    catch( e ) {
        console.log( e.stack );
    }
    return null;
};
exports.updateList= async function(questions) {
    console.log("Running query")
    let text = "DELETE FROM questions WHERE 1=1; INSERT INTO questions VALUES ";
    for (var i = 0; i < questions.length; i++){
        text+=`( ${i+1} , '${questions[i].author}', '${questions[i].questiontext}', '${questions[i].questiontime}')`
        if (i < questions.length -1){
            text+=','
        }
    }
    text+=";"

    let values = [ ];
    try {
         
        let res = await db.query( text, values );

        if( res.rowCount > 0 ) {
            return res.rows;
        }
        
        return null;
    }
    catch( e ) {
        console.log( e.stack );
    }
    return null;
};

