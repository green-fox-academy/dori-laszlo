const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// app.get('/', (req, res) => {
//   res.send('index');
// });

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Dashboard',
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});