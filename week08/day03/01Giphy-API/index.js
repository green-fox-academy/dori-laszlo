let xhr = new XMLHttpRequest();
let gif = document.querySelector('.gif');

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=SVUMo4hngrFf8imLWeRi8qfZYE5x1tIZ&q=cat&limit=16&offset=0&rating=G&lang=en', true);
xhr.onload = () => {
  let img = document.createElement('img');
  let dataFromGiphy = JSON.parse(xhr.responseText);
  console.log(dataFromGiphy);
  // img.setAttribute('src', JSON.parse(xhr.responseText).data[0].images.original.url);
  // gif.appendChild(img);
  let clickCounter = 0;
  for (let i = 0; i < dataFromGiphy.data.length; i++) {
    let thumbnail = document.createElement('img');
    thumbnail.addEventListener('click', function () {
      if (clickCounter === 0) {
        thumbnail.setAttribute('src', JSON.parse(xhr.responseText).data[i].images.fixed_height.url);
        clickCounter++;
      } else {
        thumbnail.setAttribute('src', JSON.parse(xhr.responseText).data[i].images.fixed_height_small_still.url);
        clickCounter = 0;
      }
    });
    thumbnail.setAttribute('src', JSON.parse(xhr.responseText).data[i].images.fixed_height_small_still.url);
    gif.appendChild(thumbnail);
  }
}
xhr.send();
