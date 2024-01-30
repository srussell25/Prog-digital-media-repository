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
beginShape();
fill('red');
strokeWeight(3);


vertex(275 - 225 / 2 * cos((5 * PI) / 10) , 1875 - 225 / 2 * sin((5* PI) / 10));
vertex(275 - 225 / 6 * cos((7 * PI) / 10) , 1875 - 225 / 6 * sin((7* PI) / 10));
vertex(275 - 225 / 2 * cos((9 * PI) / 10) , 1875 - 225 / 2 * sin((9* PI) / 10));
vertex(275 - 225 / 6 * cos((11 * PI) / 10) , 1875 - 225 / 6 * sin((11* PI) / 10));
vertex(275 - 225 / 2 * cos((13 * PI) / 10) , 1875 - 225 / 2 * sin((13* PI) / 10));
vertex(275 - 225 / 6 * cos((15 * PI) / 10) , 1875 - 225 / 6 * sin((15 * PI) / 10));
vertex(275 - 225 / 2 * cos((17 * PI) / 10) , 1875 - 225 / 2 * sin((17* PI) / 10));
vertex(275 - 225 / 6 * cos((19 * PI) / 10) , 1875 - 225 / 6 * sin((19* PI) / 10));
vertex(275 - 225 / 2 * cos((1 * PI) / 10) , 1875 - 225 / 2 * sin((1* PI) / 10));
vertex(275 - 225 / 6 * cos((3 * PI) / 10) , 1875 - 225 / 6 * sin((3* PI) / 10));

endShape(CLOSE);
}
