function setup() {
  createCanvas(800,2400);
}

function draw() {

  //Example 1
  fill('lime');
  rect(0,0,600,300);
  strokeWeight(2); //changes boarder to be thicker
  stroke(0); //if nothing is written in here, it will be white
  fill('white');
  circle(150,150, 200); //x cord, y cord, diameter
  square(350, 30, 200);
  
  //Example 2
  fill('white');
  stroke(255);
  square(0,500,600);
  fill('rgba(255, 0, 0, 0.5)'); //red
  circle(300,625 ,200);
  fill('rgba(0, 255, 0, 0.5)'); //green
  circle(225,750,200);
  fill('rgba(0,0,255,0.5)'); //blue
  circle(375,750,200);

  //Example 3
fill('black');
stroke(225);
square(0,1000,550);
fill('yellow');
circle(160,1250,200);
fill('black');
stroke(0);
triangle(160,1250,50,1100,50,1400);//entire pac-man
fill('red');
square(280,1150,200,100,100,0,0);
fill('white');
circle(335,1235,50);
circle(415,1235,50);
fill('blue');
circle(335,1235,25);
circle(415,1235,25); //finished ghost

//Example 4
fill('rgb(0,0,100)');
square(0,1600,550);
fill('green');// circle
stroke(255);
circle(275,1875,225);
fill('red');
nPointedStar(275, 1875, 5, 175 * (2/3), 75 * (2/3), 3); //actual star

}

function nPointedStar(x, y, n, outerRadius, innerRadius){
  let theta = TAU / n;
  beginShape();

  for(let i = 0; i < n; i++){
    vertex(x+ cos(i * theta) * outerRadius, y + sin(i * theta) * outerRadius);
    vertex(x + cos((i + 0.5) * theta) * innerRadius, y + sin((i + 0.5) * theta) * innerRadius);
  }
  endShape(CLOSE);
}