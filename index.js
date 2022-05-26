// factory function for creating rectangles
function createRectangle(width, height, x, y, backgroundColor) {
  return {
    width,
    height,
    x,
    y,
    backgroundColor,
    draw() {
      let rectangle = document.createElement("div");
      rectangle.style.setProperty("width", this.width + "px");
      rectangle.style.setProperty("height", this.height + "px");
      rectangle.style.position = "absolute";
      rectangle.style.setProperty("left", this.x + "px");
      rectangle.style.setProperty("top", this.y + "px");
      rectangle.style.backgroundColor = this.backgroundColor;
      document.body.appendChild(rectangle);
    },
  };
}

//Create 50 rectangles with Random Color width,height, position 
for (let i = 0; i <= 50; i++) {
  let w = Math.floor(Math.random() * 50) + 40;
  let h = Math.floor(Math.random() * 50) + 40;
  let x = Math.floor(Math.random() * (window.innerWidth - 100));
  let y = Math.floor(Math.random() * (window.innerHeight - 100));
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let bgColor = `rgb(${r},${g},${b})`;
  createRectangle(w, h, x, y, bgColor).draw();
}

//Add event listeners mouseover to Rectangles
let rectangles = document.getElementsByTagName("div");
for (const rectangle of rectangles) {
  rectangle.addEventListener("mouseover", moveElement);
}

//move element with mouse over random position
function moveElement(e) {
  let newX = Math.floor(Math.random() * (window.innerWidth / 1.5));
  let newY = Math.floor(Math.random() * (window.innerHeight / 1.5));
  let element = e.target;
  element.style.setProperty("left", newX + "px");
  element.style.setProperty("top", newY + "px");
}
