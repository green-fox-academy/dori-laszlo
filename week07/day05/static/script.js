let xhr = new XMLHttpRequest();

let buttonUp = document.querySelectorAll('.js-upvote');
let buttonDown = document.querySelectorAll('.js-downvote');

buttonUp.forEach(button => {
  button.addEventListener('click', function (e) {
    let postId = e.target.parentNode.parentNode.id;
    let post = e.target.parentNode.parentNode;
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
