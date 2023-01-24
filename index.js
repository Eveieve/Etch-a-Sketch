for (let i = 0; i <= 16; i++) {
  const container = document.querySelector(".container");
  const divRow = document.createElement("div");
  container.appendChild(divRow);
  for (let k = 0; k <= 16; k++) {
    const divColumn = document.createElement("div");
    container.appendChild(divColumn);
    divColumn.setAttribute(
      "style",
      "height: 50px; width: 50px; border: thick solid black;"
    );
  }
  divRow.setAttribute(
    "style",
    "height: 50px; width: 50px; border: thick solid black;"
  );
}
