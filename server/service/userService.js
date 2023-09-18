
// database connection
const db = require( '../db/connection' );


exports.getUsers= async function( ) {
    console.log("Running query")
    let text = "SELECT * FROM users ";
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
exports.updateList= async function(users) {
    console.log("Running query")
    let text = "DELETE FROM users WHERE 1=1; INSERT INTO users VALUES ";
    for (var i = 0; i < users.length; i++){
        text+=`(${i+1}, '${users[i].firstname}', '${users[i].lastname}', '${users[i].email}' ) `
        if (i < users.length -1){
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

