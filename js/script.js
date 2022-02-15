const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const imageDisplay = document.getElementById('image-display');
const randomBtn = document.getElementById('random-image');

const getImg = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.message;
  } catch (e) {
    console.error(e);
  };
};

const loadImg = async () => {
  imageDisplay.src = await getImg();
};

randomBtn.addEventListener('click', loadImg);

loadImg();