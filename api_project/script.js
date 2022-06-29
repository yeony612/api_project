console.log("js is working!");

const getFacts = async () => {
  const catFacts = await axios.get("https://cat-fact.herokuapp.com/facts");
  console.log(catFacts);
};

getFacts();

const catButton = document.querySelector(".cat-fact-button");
const resultDiv = document.querySelector(".cat-fact");
const imageDiv = document.querySelector(".cat-image");

// const generateFact = async () => {
//   console.log("generate fact function working!");
//   let response = await axios.get(`https://cat-fact.herokuapp.com/facts/random`);
//   let data = response.data.text;
//   resultDiv.innerHTML = `<p>${data}</p>`;
// };

const generateImage = async () => {
  console.log("generate Image function working!");
  let response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
  console.log(response);
  let image = response.data[0].url;
  console.log(image);
  imageDiv.innerHTML = `<img src="${image}" width="600" height="100%"></img>`;
};

generateImage();
