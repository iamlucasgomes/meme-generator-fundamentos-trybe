const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.oninput = function textMeme() {
  memeText.innerText = textInput.value;
};
