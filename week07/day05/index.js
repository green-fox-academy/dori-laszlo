let mysql = require('mysql');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'a',
  database: 'reddit',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// conn.end(

app.get('/', (req, res) => {
  conn.query('SELECT * FROM posts;', function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    console.log(posts);
    res.render('home', {
      posts: posts,
      title: 'Posts',
    })
  });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/hello', (req, res) => {
  res.json({
    hello: 'Hello World!',
    title: 'Hello',
  });
});

app.get('/posts', function(req, res) {
  conn.query('SELECT * FROM posts;', function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    console.log(posts);
    res.render('home', {
      posts: posts,
      title: 'Posts',
    })
  });
});

app.get('/api/posts', function(req, res) {
  conn.query('SELECT * FROM posts;', function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.json(posts);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title, url, score) VALUES ('${req.body.title}', '${req.body.url}', 1);`, function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'OK',
      id: posts.insertId,
      title: 'Posts',
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${req.params.id}`, function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'OK',
      title: 'Posts',
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${req.params.id}`, function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'OK',
      title: 'Posts',
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  conn.query(`DELETE FROM posts WHERE id = ${req.params.id}`, function(err, posts) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'OK',
      title: 'Posts',
      id: req.params.id,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
