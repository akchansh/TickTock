var backgr;
var hor, min, sec;

function preload() {
  backgr = loadImage("images.jpg");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(backgr);  
  hor = hour();
  min = minute();
  sec = second();

  fill(0);
  textSize(30);
  text(hor % 12 + " : " + min + " : " + sec, 230, 50);
  textSize(10);
  text("Hour", 228, 23);
  text("Min", 280, 23);
  text("Sec", 333, 23);
  textSize(15);

  if(hor <= 12){
    text("AM", 375, 45);
  }else {
    text("PM", 370, 45);
  }

  textSize(25);
  text("12", 280, 200);
  text("3", 400, 305);
  text("6", 280, 410);
  text("9", 180, 305);

  textSize(15);
  fill(224, 168, 13);
  rect(500, 510, 15, 15);
  fill(0);
  text("Hours", 525, 523);

  fill(0, 108, 150);
  rect(500, 535, 15, 15);
  fill(0);
  text("Minutes", 525, 548);

  fill(150, 0, 60);
  rect(500, 560, 15, 15);
  fill(0);
  text("Seconds", 523, 573);

  translate(300, 300);
  rotate(-90);

  strokeWeight(7);
  stroke(150, 0, 60);
  noFill();

  var secs = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secs);

  stroke(0, 108, 150);
  var mins = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mins);

  stroke(224, 168, 13);
  var hours = map(hor % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hours);

  push();
  rotate(secs);
  strokeWeight(3);
  stroke(150, 0, 60);
  line(0, 0, 118, 0);
  pop();

  push();
  rotate(mins);
  strokeWeight(5);
  stroke(0, 108, 150);
  line(0, 0, 60, 0);
  pop();

  push();
  rotate(hours);
  strokeWeight(7);
  stroke(224, 168, 13);
  line(0, 0, 100, 0);
  pop();

  stroke("cyan");
  point(0, 0);
}