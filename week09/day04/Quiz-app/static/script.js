let score = document.querySelector('#score_value');

let xhr = new XMLHttpRequest();
let buttons = document.querySelectorAll('.answers');
let questionText = document.querySelector('#questionText');

function getQuestion() {
  xhr.open('GET', '/game');
  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    console.log(response);
    questionText.innerText = response.question;
    response.answers.forEach(answer => {
      let answerButton = document.createElement('button');
      answerButton.className = 'answers';
      answerButton.setAttribute('id', answer.is_correct)
    })
  };
  xhr.send();
};

function clickOnAnAnswer(event) {
  if (event.target.id === '1') {
    event.target.className = 'correct';
    score.innerText = parseInt(score.innerText) + 1;
  } else {
    event.target.className = 'wrong';
  }
  setTimeout(function () {
    getQuestion();
  }, 1000);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickOnAnAnswer);
}

