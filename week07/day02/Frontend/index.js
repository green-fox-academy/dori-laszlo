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

app.get('/greeter', (req, res) => {
  if (req.query.name === undefined) {
    res.json({
      'error': 'Please provide a name!'
    })
  } else if (req.query.title === undefined) {
    res.json({
      'error': 'Please provide a title!'
    })
  } else {
    res.json({
      'welcome_message': `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    'appended': `${req.params.appendable + 'a'}`
  })
});

app.post('/dountil/:what', (req, res) => {
  let number = req.body.until;
  const what = req.params.what;
  if (req.body.until === undefined) {
    res.json({
      error: 'Please provide a number!'
    })
  } else if (what === 'sum') {
    function addNum(number) {
      if (number > 0) {
        return number + addNum(number - 1);
      } else {
        return 0;
      }
    };
    res.json({
      result: addNum(number)
    })
  } else if (what === 'factor') {
    function factorio(number) {
      let calculateFactorial = 1;
      for (let i = 1; i <= number; i++) {
        calculateFactorial = (calculateFactorial * i);
      }
      return calculateFactorial;
    };
    res.json({
      result: factorio(number)
    })
  }
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
