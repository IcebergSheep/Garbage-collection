
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// MySQL connection 실행
connection.connect(error=>{
    if(error) throw error;
    console.log("데이터베이스와 연결되었습니다");
})

module.exports = connection;
