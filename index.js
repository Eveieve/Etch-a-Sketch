const btn = document.querySelector("button");
btn.onclick = () => prompt("How many grid? Up to 100!");
btn.setAttribute("style", "width: 100px; height: 50px");

const container = document.querySelector(".container");
container.setAttribute(
  "style",
  "display: flex; width:960px; height: 960px; flex-wrap: wrap;"
);

for (let i = 0; i <= 16 * 16 - 1; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  div.classList.add("square");
  div.setAttribute("style", "min-width: 60px;");
}

const divs = document.querySelectorAll(".square"); //divs is a Nodelist! not an array!
const divsArr = Array.from(divs);

for (i = 0; i < divsArr.length; i++) {
  divsArr[i].addEventListener("mouseover", changeBackground);
}

function changeBackground(event) {
  event.target.style.backgroundColor = "blue";
}
