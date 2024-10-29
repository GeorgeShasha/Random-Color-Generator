const containerEl = document.querySelector(".container");

for (let i = 0; i < 24; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

const randomColor = () => {
  const chars = "0123456789ABCDEF";
  const colorCodeLength = 6;

  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
};

randomColor();

const generateColors = () => {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = `#${newColorCode}`;
    colorContainerEl.innerHTML = `#${newColorCode}`;
  });
};

generateColors();
