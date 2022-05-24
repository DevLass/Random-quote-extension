const text = document.querySelector('.container_text')
const author = document.querySelector('.text_author')
const button = document.querySelector('.button-80')


function button_animation(){
    button.classList.add('liked');

    setTimeout(() => {
      button.classList.remove('liked');
  }, 500);

} 

function random(){
  fetch("https://api.quotable.io/random").then(res =>res.json().then(result =>{
    text.innerText = result.content;
    author.innerText = result.author;
    console.log(result)
  }))
}

random();

button.addEventListener('click', random);
button.addEventListener('click', button_animation);