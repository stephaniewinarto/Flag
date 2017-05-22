var squares; 

var squareArray = [] 

var Col1 = 0
var Col2 = 80
var Col3 = 160
var Col4 = 240
var Col5 = 320
var Col6 = 400
var Col7 = 480

var yPos = 0
var yPos2 = 80
var yPos3 = 160
var yPos4 = 240
var yPos5 = 320


var wh = 80





function preload() { 
   for (var counter = 0; counter < squareFileNames.length; counter++) { 
    squares = loadImage("squares/" + squareFileNames[counter]);
     squareArray.push(squares);
}
}

function setup() { 
  createCanvas(560, 400); 
  background(0,0,0);
}

function draw() { 
  
  var randomsquare1 = random(squareArray);
  var randomsquare2 = random(squareArray);
  var randomsquare3 = random(squareArray);
  var randomsquare4 = random(squareArray);
  var randomsquare5 = random(squareArray);
  var randomsquare6 = random(squareArray);
  var randomsquare7 = random(squareArray);
  var randomsquare8 = random(squareArray);
  var randomsquare9 = random(squareArray);
  var randomsquare10 = random(squareArray);
  var randomsquare11 = random(squareArray);
  var randomsquare12 = random(squareArray);
  var randomsquare13 = random(squareArray);
  var randomsquare14 = random(squareArray);
  var randomsquare15 = random(squareArray);
  var randomsquare16 = random(squareArray);
  var randomsquare17 = random(squareArray);
  var randomsquare18 = random(squareArray);
  var randomsquare19 = random(squareArray);
  var randomsquare20 = random(squareArray);
  var randomsquare21 = random(squareArray);
  var randomsquare22 = random(squareArray);
  var randomsquare23 = random(squareArray);
  var randomsquare24 = random(squareArray);
  var randomsquare25 = random(squareArray);
  var randomsquare26 = random(squareArray);
  var randomsquare27 = random(squareArray);
  var randomsquare28 = random(squareArray);
  var randomsquare29 = random(squareArray);
  var randomsquare30 = random(squareArray);
  var randomsquare31 = random(squareArray);
  var randomsquare32 = random(squareArray);
  var randomsquare33 = random(squareArray);
  var randomsquare34 = random(squareArray);
  var randomsquare35 = random(squareArray);
  
  if (mouseIsPressed||touchIsDown) {
  image(randomsquare1,Col1,yPos,wh,wh);
  image(randomsquare2,Col2,yPos,wh,wh);
  image(randomsquare3,Col3,yPos,wh,wh);
  image(randomsquare4,Col4,yPos,wh,wh);
  image(randomsquare5,Col5,yPos,wh,wh);
  image(randomsquare6,Col6,yPos,wh,wh);
  image(randomsquare7,Col7,yPos,wh,wh);
  
  image(randomsquare8,Col1,yPos2,wh,wh);
  image(randomsquare9,Col2,yPos2,wh,wh);
  image(randomsquare10,Col3,yPos2,wh,wh);
  image(randomsquare11,Col4,yPos2,wh,wh);
  image(randomsquare12,Col5,yPos2,wh,wh);
  image(randomsquare13,Col6,yPos2,wh,wh);
  image(randomsquare14,Col7,yPos2,wh,wh);
  
  image(randomsquare15,Col1,yPos3,wh,wh);
  image(randomsquare16,Col2,yPos3,wh,wh);
  image(randomsquare17,Col3,yPos3,wh,wh);
  image(randomsquare18,Col4,yPos3,wh,wh);
  image(randomsquare19,Col5,yPos3,wh,wh);
  image(randomsquare20,Col6,yPos3,wh,wh);
  image(randomsquare21,Col7,yPos3,wh,wh);
  
  image(randomsquare22,Col1,yPos4,wh,wh);
  image(randomsquare23,Col2,yPos4,wh,wh);
  image(randomsquare24,Col3,yPos4,wh,wh);
  image(randomsquare25,Col4,yPos4,wh,wh);
  image(randomsquare26,Col5,yPos4,wh,wh);
  image(randomsquare27,Col6,yPos4,wh,wh);
  image(randomsquare28,Col7,yPos4,wh,wh);
  
  image(randomsquare29,Col1,yPos5,wh,wh);
  image(randomsquare30,Col2,yPos5,wh,wh);
  image(randomsquare31,Col3,yPos5,wh,wh);
  image(randomsquare32,Col4,yPos5,wh,wh);
  image(randomsquare33,Col5,yPos5,wh,wh);
  image(randomsquare34,Col6,yPos5,wh,wh);
  image(randomsquare35,Col7,yPos5,wh,wh);
  }
    /*var randomsquares = random(squareArray);
  	image(randomsquares,10,50,10,10);
  	*/

}


var squareFileNames = ["square1.png",
"square2.png",
"square3.png",
"square4.png",
"square5.png",
"square6.png",
"square7.png",
"square8.png",
"square9.png",
"square10.png",
"square11.png",
"square12.png",
"square13.png",
"square14.png",
"square15.png",
"square16.png",
"square17.png",
"square18.png",
"square19.png",
"square20.png",
"square21.png",
"square22.png",
"square23.png",
"square24.png",
"square25.png",
"square26.png",
"square27.png",
"square28.png",
"square29.png",
"square30.png",
"square31.png",
"square32.png",
"square33.png",
"square34.png",
"square35.png",
]

