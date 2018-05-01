let xhr = new XMLHttpRequest();

let buttonUp = document.querySelectorAll('.js-upvote');
let buttonDown = document.querySelectorAll('.js-downvote');

buttonUp.forEach(button => {
  button.addEventListener('click', function (e) {
    let postId = e.target.parentNode.parentNode.parentNode.id;
    let post = e.target.parentNode.parentNode.parentNode;
    console.log(postId)
    console.log(typeof postId)
    xhr.open('PUT', `http://localhost:3000/posts/${postId}/upvote`, true);
    // xhr.open('GET', `http://localhost:3000/api/posts`, true);
    // xhr.onload = () => {
    //   let postData = JSON.parse(xhr.responseText);
    //   console.log(postData)
    //   let currentPost = postData.find(post => post.id = postId);
    //   console.log(currentPost)
    //   let thisScore = post.querySelector('.item__score');
    //   console.log(thisScore)
    //   thisScore.innerHTML = currentPost.score;
    // };
    xhr.send();
  });
});

buttonDown.forEach(button => {
  button.addEventListener('click', function (e) {
    let postId = e.target.parentNode.parentNode.parentNode.id;
    let post = e.target.parentNode.parentNode.parentNode;
    console.log(postId)
    console.log(typeof postId)
    xhr.open('PUT', `http://localhost:3000/posts/${postId}/downvote`, true);
    // xhr.open('GET', `http://localhost:3000/api/posts`, true);
    // xhr.onload = () => {
    //   let postData = JSON.parse(xhr.responseText);
    //   console.log(postData)
    //   let currentPost = postData.find(post => post.id = postId);
    //   console.log(currentPost)
    //   let thisScore = post.querySelector('.item__score');
    //   console.log(thisScore)
    //   thisScore.innerHTML = currentPost.score;
    // };


    // console.log(e);
    // xhr.onload = (event) => {
    //   e.target.parentNode.childNodes[3].innerText = parseInt(e.target.parentNode.childNodes[3].innerText) + 1;
    // };

    // xhr.sent(JSON.stringify({}))

    xhr.send();
  });
});

const submitButton = document.querySelector('#form-submit-button');

submitButton.addEventListener('click', (e) => {
  const tile = document.querySelector('#title').value;
  const url = document.querySelector('#url').value;
  
  if (title !== '' && url!== '') {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', `http://localhost:3000/posts/`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = (event) => {
      console.log(event);
      if (xhr.readyState === xhr.DONE) {
        const newPost = document.createElement('div');
        newPost.className = 'item';

        const itemTitle = document.createElement('div');
        itemTitle.className = 'item__title';
      }
      xhr.send(JSON.stringify({
        title: title,
        url: url,
      }));
    }
  }
  e.preventDefault();
});