const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catButton = document.getElementById("change-cat");

const getGatinho = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch(e) {
    console.log(e.message);
  }
};


const loadImage = async () => {
    const catImage = document.getElementById("cat");
    catImage.src = await getGatinho();
}

catButton.addEventListener("click", loadImage);

loadImage();