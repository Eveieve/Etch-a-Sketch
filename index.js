const btn = document.querySelector("button");

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", eraseAll);
btn.addEventListener("click", removeAll);
btn.addEventListener("click", getGrid);

function eraseAll() {
  console.log("eraseAll");
  const divs = document.querySelectorAll(".square");

  const divsArr = Array.from(divs);
  for (let i = 0; i < divsArr.length; i++) {
    divsArr[i].style.background = "transparent";
    //divsArr[i].setAttribute("style", "background: transparent;");// why is it saying it's undefined?
  }
}

function removeAll() {
  console.log("run removeall");
  const divs = document.querySelectorAll(".square");

  const divsArr = Array.from(divs);
  for (let i = 0; i < divsArr.length; i++) {
    divsArr[i].remove();
  }
}

//create the initial grid so the page is not blank.

const container = document.querySelector(".container");
container.style.cssText =
  "display: flex; flex-wrap: wrap; width: 800px; height: 800px";

for (let i = 0; i < 20 * 20; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  div.classList.add("square");
  div.style.cssText = `min-width:${800 / 20}px`;
}

const divs = document.querySelectorAll(".square");
const divsArr = Array.from(divs);

for (i = 0; i < divsArr.length; i++) {
  divsArr[i].addEventListener(
    "mouseover",
    (e) => (e.target.style.background = "blue")
  );
}

let grid;

function getGrid() {
  console.log("run getgrid");
  const container = document.querySelector(".container");
  container.style.cssText =
    "display: flex; flex-wrap: wrap; width: 800px; height: 800px";

  grid = prompt("How many grid? Up to 100!");

  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("square");
    div.style.cssText = `min-width:${800 / grid}px`;
  }

  const divs = document.querySelectorAll(".square");
  const divsArr = Array.from(divs);

  for (i = 0; i < divsArr.length; i++) {
    divsArr[i].addEventListener(
      "mouseover",
      (e) => (e.target.style.background = "blue")
    );
  }
}
// when rgb button is clicked, make the squares in rbg color when hovered.
//

//why the red underline?
// can't divs be initialized again if it's out of the function?

const rgbButton = document.querySelector(".rgb");
rgbButton.addEventListener("click", getRgb);

function getRandomRgb() {
  console.log("getRandomRgb");
  return Math.floor(Math.random() * 256);
} //this function can be outside of getRbg or inside.. which is better?

function getRgb() {
  console.log("getRgb");
  const divs = document.querySelectorAll(".square");
  const divsArr = Array.from(divs);

  for (i = 0; i < divsArr.length; i++) {
    divsArr[i].addEventListener(
      "mouseover",
      (e) =>
        (e.target.style.backgroundColor = `rgb(${getRandomRgb()},${getRandomRgb()} ,${getRandomRgb()}`)
    );
  }
}
