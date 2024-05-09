var storageData = [76,35,59,20,13,90];
var colors = ["red", "green", "blue", "yellow", "purple"];
var storageNames = ["A", "B" ,"C" ,"D" ,"E"];
var total;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}

function draw() {
  let lastPiece = 0;

  total = getTotal();
  
  for (let i = 0; i < storageData.length; i++) {
    let randColor = color(random(255), random (255), random(255));
    fill(randColor);
    let piece = map(storageData[i], 0, total, 0, TWO_PI);
    arc(width/2, height/2, 300, 300, lastPiece, lastPiece + piece);
    lastPiece += piece;
    }
  }

  function getTotal(){
let total = 0;
for (let i = 0; i < storageData.length; i++){
total += storageData[i];
}
return total; 
}













  // for (let i = 0; i < storageData.length; i++){
  //   circle(100 + i * 100, 100, storageData[i]);
  //   let randColor = color(random(255),random(255),random(255));
  //   noStroke (storageData[i]);
  //   fill (randColor);
  // }