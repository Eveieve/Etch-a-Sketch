const btn = document.querySelector("button");
btn.addEventListener("click", getGrid);

let grid;

function getGrid() {
  grid = prompt("How many grid? Up to 100!");
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("square");
    div.setAttribute("style", `min-width:${960 / grid}px`); //is there a way to use 'grid' inside the strings?
  }

  const divs = document.querySelectorAll(".square");
  const divsArr = Array.from(divs);

  for (i = 0; i < divsArr.length; i++) {
    divsArr[i].addEventListener("mouseover", changeBackground);
  }

  function changeBackground(event) {
    event.target.style.backgroundColor = "blue";
  }
}

btn.setAttribute("style", "width: 100px; height: 50px");

const container = document.querySelector(".container");
container.setAttribute(
  "style",
  "display: flex; width:960px; height: 960px; flex-wrap: wrap;"
);
