const container = document.querySelector(".container");
container.setAttribute(
  "style",
  "display: flex; max-width:20em; max-height: 20em; flex-wrap: wrap;"
);

for (let i = 0; i <= 16 * 16 - 1; i++) {
  const div = document.createElement("div"); //create a div in memory
  container.appendChild(div); //append div to the front end
  div.classList.add("square");

  div.setAttribute("style", "width:1em; height:1em"); //why is this working?
}
const allDivs = document.querySelectorAll(".square");
allDivs.setAttribute("style", "flex-shrink:1;");
