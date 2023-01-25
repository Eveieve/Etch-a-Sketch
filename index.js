const container = document.querySelector(".container");
container.setAttribute(
  "style",
  "display: flex; width:20em; height: 20em; flex-wrap: wrap;"
);

for (let i = 0; i <= 16 * 16 - 1; i++) {
  const div = document.createElement("div"); //create a div in memory
  container.appendChild(div); //append div to the front end
  div.classList.add("square");
  div.setAttribute("style", "width:1em; height:1em"); //why is this working?
}

const divs = document.querySelectorAll(".square"); //divs is a Nodelist! not an array!
const divsArr = Array.from(divs);

for (i = 0; i < divsArr.length; i++) {
  divsArr[i].addEventListener("mouseover", changeBackground);
}

function changeBackground(event) {
  event.target.style.backgroundColor = "blue";
}

/*addEventListener("mouseover", (event) => {
  divsArr.target.style.background = "blue";
});*/
/*function hover() {
  divsArr.addEventListener("mouseover", )
  divsArr.setAttribute("style", "background:blue;");
}*/
