const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 8080;
const app = express();
const bodyParser = require('body-parser');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a',
  database: 'quiz',
});


app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  conn.query('SELECT * FROM questions;', function (err, questions) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }

    const question = questions[Math.floor(Math.random() * (questions.length - 1)) + 1];

    conn.query(`SELECT * FROM answers WHERE answers.question_id = ${question.id};`, function (err, answers) {
      if (err) {
        console.log(err.toString());
        res.satus(500).send('Database error');
        return;
      }
      res.render('index', {
        title: 'Quiz app',
        question: question.question,
        answers,
        score: 0,
      });
    });
  });
});

app.get('/game', (req, res) => {
  // conn.query('SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id ;', function(err, result) {
  conn.query('SELECT * FROM questions;', function (err, questions) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }

    const question = questions[Math.floor(Math.random() * (questions.length - 1)) + 1];

    conn.query(`SELECT * FROM answers WHERE answers.question_id = ${question.id};`, function (err, answers) {
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

app.get('/questions', (req, res) => {
  conn.query(`SELECT * FROM questions;`, function (err, result) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.json(result);
  });
});

app.post('/questions', (req, res) => {
  const {
    question, answer_1, is_correct1, answer_2, is_correct2, answer_3, is_correct3, answer_4, is_correct4
  } = req.body;
  if (parseInt(is_correct1) + parseInt(is_correct2) + parseInt(is_correct3) + parseInt(is_correct4) !== 1) {
    res.json({
      error: 'Please provide one correct answer!'
    })
    return;
  }

  conn.query(`INSERT INTO questions (question) VALUES ("${question}");`, (err, response) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      let questionID = question.insertId;
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${questionID}, "${answer_1}", ${is_correct1}),
      (${questionID}, "${answer_2}", ${is_correct2}),
      (${questionID}, "${answer_3}", ${is_correct3}),
      (${questionID}, "${answer_4}", ${is_correct4});`, question, (err, response) => {
        if (err) {
          res.status(400).json({
            error: 'Wrong request',
          });
        } else {
          res.json({response: "success"});
        }
      }
    )};
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});


// POST /questions
// If you fill the form
// And click on the submit button
// It should add a new question
// And update the questions