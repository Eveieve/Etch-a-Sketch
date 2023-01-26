const btn = document.querySelector("button");
btn.addEventListener("click", getGrid);

let grid;
function getGrid() {
  grid = prompt("How many grid? Up to 100!");
  for (let i = 0; i <= grid * grid - 1; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("square");
    div.setAttribute("style", "min-width: 60px");
  }

  const divs = document.querySelectorAll(".square"); //divs is a Nodelist! not an array!
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
// something here to determine grid size

//how can i access 'grid'?
