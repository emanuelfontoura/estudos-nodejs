const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '1909',
    database : 'nodemysql'
})

module.exports = pool