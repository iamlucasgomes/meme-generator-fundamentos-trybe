const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const carbon = document.querySelector('#carbon');
const images = document.querySelectorAll('#memes-container img');

function textMeme() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('input', textMeme);

function setImage() {
  memeInsert.addEventListener('change', function putImage() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadedImage = reader.result;
      memeImage.src = uploadedImage;
    });
    reader.readAsDataURL(this.files[0]);
  });
}

setImage();

function setFire() {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

fire.addEventListener('click', setFire);

function setWater() {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
}

water.addEventListener('click', setWater);

function setEarth() {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
}

earth.addEventListener('click', setEarth);

function setCarbon() {
  memeContainer.style.border = '1px solid black';
}

carbon.addEventListener('click', setCarbon);

function thumbImagesClick() {
  for (let index = 0; index < images.length; index += 1) {
    images[index].addEventListener('click', () => {
      memeImage.src = images[index].src;
    });
  }
}

thumbImagesClick();
