console.log("js is working!");

const getFacts = async () => {
  const catFacts = await axios.get("https://cat-fact.herokuapp.com/facts");
  console.log(catFacts);
};

getFacts();

const catButton = document.querySelector(".cat-fact-button");
const resultDiv = document.querySelector(".cat-fact");

const generateFact = async () => {
  console.log("generate fact function working!");
  let response = await axios.get(`https://cat-fact.herokuapp.com/facts/random`);
  let data = response.data.text;
  resultDiv.innerHTML = `<p>${data}</p>`;
};

catButton.addEventListener("click", generateFact);
