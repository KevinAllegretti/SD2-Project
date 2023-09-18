/**
 * Agora - Close the loop
 * © 2021-2023 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

 const { Pool, Client } = require( 'pg' );
 
 const pool = new Pool( { 
     host: 'localhost',
     port: 5432,
     user: "oversteer",
     password: "oversteer",
     database: 'oversteer',
     max: 20,
     idleTimeoutMillis: 30000,
     connectionTimeoutMillis: 2000,
     ssl: false
 } );
 
 
 module.exports = {
     pool: () => pool,
     query: ( text, params ) => pool.query( text, params ),
 };
 