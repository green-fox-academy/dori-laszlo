const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 8080;
const app = express();
const bodyParser = require('body-parser');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'a',
  database: 'quiz',
});


app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/game', (req, res) => {
  // conn.query('SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id ;', function(err, result) {
  conn.query('SELECT * FROM questions;', function(err, questions) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }

    const question = questions[Math.floor(Math.random() * (questions.length - 1)) + 1];

    conn.query(`SELECT * FROM answers WHERE answers.question_id = ${question.id};`, function(err, answers) {
      if (err) {
        console.log(err.toString());
        res.satus(500).send('Database error');
        return;
      }
      res.json({
        id: question.id,
        question: question.question,
        answers,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
