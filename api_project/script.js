console.log("js is working!");

const apiFunction = () => {};

const catButton = document.querySelector(".cat-fact-button");
const catFact = () => {
  console.log("button function working!");
};
catButton.addEventListener("click", catFact);
