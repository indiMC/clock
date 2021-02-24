var hr,min,sec;
var secondAngle,minuteAngle,hourAngle;
var bg,bgImg;

function preload(){
  bgImg = loadImage("a.png");
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  bg = createSprite(200,200,1,1);
  bg.addImage(bgImg);
  bg.scale = 0.3
}

function draw() {
  background(0);

  drawSprites();

  translate(200, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  strokeWeight(10);
  stroke("cyan");
  noFill();
  secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("lime");
  minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke("yellow");
  hourAngle = map(hr, 0, 24, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke('cyan');
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke('lime');
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("yellow");
  line(0, 0, 50, 0);
  pop();


  //adding point (new);
  stroke(255);
  point(0,0)

}