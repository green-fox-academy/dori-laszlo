const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      'error': 'Please provide an input!'
    })
  } else {
    res.json({
      'received': req.query.input,
      'result': req.query.input * 2,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});



// app.get('/api/hello', (req, res) => {
//   console.log(req.query);
//   const name = req.query.name || 'Guest';
//   res.json({
//     message: `Hello ${name}!`,
//   });
// });


// app.get('/api/mentors/:mentorId', (req, res) => {
//   const mentor = mentors[req.params.mentorId - 1];

//   if(mentor === undefined) {
//     res.status(404);
//     res.json({
//       message: `No mentor with id ${req.params.mentorId}`
//     })
//   } else {
//     res.json(mentor);
//   }
// });


// app.get('/api/hello', (req, res) => {
//   console.log(req.query);
//   const name = req.query.name || 'Guest';
//   res.json({
//     message: `Hello ${name}!`,
//   });
// });

