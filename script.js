const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

function textMeme() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('input', textMeme);

function getImage() {
  memeInsert.addEventListener('change', function putImage() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadedImage = reader.result;
      memeImage.src = uploadedImage;
    });
    reader.readAsDataURL(this.files[0]);
  });
}

getImage();
