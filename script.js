console.log("js is working!");

const getFacts = async () => {
  const catFacts = await axios.get("https://catfact.ninja/fact?max_length=140");
  console.log(catFacts);
};

getFacts();

const catButton = document.querySelector(".cta");
const factDiv = document.querySelector(".cat-fact");
const imageDiv = document.querySelector(".cat-image");

const generateFact = async () => {
  console.log("generate fact function working!");
  let responseFact = await axios.get(
    `https://catfact.ninja/fact?max_length=140`
  );
  let fact = responseFact.data.fact;
  console.log(fact);
  factDiv.innerHTML = `<p>${fact}</p>`;
};

generateFact();

const generateImage = async () => {
  console.log("generate Image function working!");
  let response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
  let image = response.data[0].url;
  imageDiv.innerHTML = `<img src="${image}" width="400" height="400" class="image-clip"></img>`;
};

generateImage();

catButton.addEventListener("click", generateImage);
catButton.addEventListener("click", generateFact);
