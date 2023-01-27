const btn = document.querySelector("button");
btn.setAttribute("style", "width: 150px; height: 50px");
const resetBtn = document.querySelector(".reset");
resetBtn.setAttribute("style", "width: 100px; height: 50px");
resetBtn.addEventListener("click", eraseAll);
btn.addEventListener("click", removeAll);
btn.addEventListener("click", getGrid);

let grid;

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

function getGrid() {
  console.log("run getgrid");
  const container = document.querySelector(".container");
  container.setAttribute(
    "style",
    "display: flex; width:960px; height: 960px; flex-wrap: wrap;"
  );

  grid = prompt("How many grid? Up to 100!");

  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("square");
    div.setAttribute("style", `min-width:${960 / grid}px`);
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
