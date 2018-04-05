const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: 'Dóri',
    image: 'http://m.blog.hu/sa/sasfeszek/image/bartos9.jpg',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
