// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("topnotchhomepages JS imported successfully!");
});



// script für p5 //

function setup() {
  let newCanvas = createCanvas(500, 200);
  newCanvas.parent('myContainer');
 newCanvas.style('border-radius', '10px');
 newCanvas.style('border', '1px solid black');


 }
 
 function draw() {
   if (mouseIsPressed) {
     fill("yellow");
   } else {
     fill(255);
   }
   heart(mouseX, mouseY, 60, 60);
 }
 
 function heart(x, y, size) {
   beginShape();
   vertex(x, y);
   bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
   bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
   endShape(CLOSE);
 }

