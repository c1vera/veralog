const express = require('express');
const app = express();

app.use(express.static(__dirname  + '/frontend'));
/*app.use(express.static(__dirname  + '/frontend/src/stylesheets'));
app.use(express.static(__dirname  + '/frontend/src/pages'));
app.use(express.static(__dirname  + '/frontend/src/components'));
app.use(express.static(__dirname  + '/frontend/src/stylesheets/assets/images'));
app.use(express.static(__dirname  + '/frontend/src/stylesheets/assets/icons'));*/

app.listen(8089, function() {
  console.log('listening on 8089');
});


app.get('/', function(요청, 응답){
  응답.sendFile(__dirname + '/index.html');
});

// db 연동
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();

connection.query('SELECT * from test', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();