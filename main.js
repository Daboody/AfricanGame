let charsArray = [];
let charactersContainer = document.querySelector(".characters-container");
let charactersElement1 = document.querySelector(".character-element1");
let charactersElement2 = document.querySelector(".character-element2");
let charactersElement3 = document.querySelector(".character-element3");
let charactersElement4 = document.querySelector(".character-element4");
let charactersElement5 = document.querySelector(".character-element5");
let charsResults = document.querySelectorAll(".char-result");

let title = document.querySelector(".title");

const finalResult = () => {
  for (let i = 0; i < charsArray.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `${charsArray[i].children[1].textContent}`;
    newDiv.classList.add("result");
    charactersContainer.appendChild(newDiv);
    charactersContainer.style.display = "block";
  }
};

const checkContainer = () => {
  if (charactersContainer.children.length === 0) {
    console.log("Show Result");
    title.innerHTML = "Your Result !";
    finalResult();
  }
};

const addElementToArray1 = () => {
  charsArray.push(charactersElement1);
  charactersElement1.remove();
  checkContainer();
};
charactersElement1.addEventListener("click", addElementToArray1);

// ##########################
const addElementToArray2 = () => {
  charsArray.push(charactersElement2);
  charactersElement2.remove();
  checkContainer();
};
charactersElement2.addEventListener("click", addElementToArray2);
// ##########################
const addElementToArray3 = () => {
  charsArray.push(charactersElement3);
  charactersElement3.remove();
  checkContainer();
};
charactersElement3.addEventListener("click", addElementToArray3);
// ##########################
const addElementToArray4 = () => {
  charsArray.push(charactersElement4);
  charactersElement4.remove();
  checkContainer();
};
charactersElement4.addEventListener("click", addElementToArray4);
// ##########################
const addElementToArray5 = () => {
  charsArray.push(charactersElement5);
  charactersElement5.remove();
  checkContainer();
};
charactersElement5.addEventListener("click", addElementToArray5);
// ##########################
