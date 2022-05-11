const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"apple_tree",
    port:3306
});

con.connect((err) => {
    if(err)
        throw err;
    console.log("Connection Done...");    

})

module.exports.con=con;