// Clock with Hour, Minutes, Seconds and Date
var x = 300
var y = 300
var minR = 45;
var maxR = 375;
var spacing = 30;
var dayR = 425;
var mthR = 495;


function setup() {
  createCanvas(600, 600);
  background(34);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noLoop();
  setTimeout(resetSketch,1000);

}

function resetSketch(){
  background(35);
  draw()
  setTimeout(resetSketch,1000);
}

function draw() {

  var hr = hour();
  var mn = minute();
  var sc = second();
  var dy = day();
  var mth = month();

  // fill(70);
  // noStroke();
  // text(hr + ':' + mn + ':' + sc, 50, 50);

  var r = [];
  for (let i =0; i < 12; i++) {
    if (i == 0){
      r.push(maxR);
    } else {
      r.push(r[i-1] - spacing);
    }
  }

  // ellipse size
  var opacity1;
  var minuteCircle = map(mn, 0, 59, 1, spacing);
  var secOpacity = map(sc, 0, 59, 0, 225);
  var curHour = hr % 12;

  if (hr <= 12) {
    fill (235, 110, 32, secOpacity);
  } else {
    fill (0,165,174, secOpacity);
  }

// ellipse opacity
  noStroke();
    if (curHour == 0){
      curHour = 12
    }
  var minuteR = r[curHour-1] - minuteCircle;
  ellipse(x, y, minuteR, minuteR);

// outer circles opacity
  var opacity;
  noFill();
  strokeWeight(0.185);
  for (let i =0; i < 12; i++) {
    if (i < curHour){
      opacity = int(map(curHour-i, 0, 11, 255, 10));
      stroke(255,255,255, opacity);
      ellipse(x, y, r[i], r[i]);
    }
  }

  // month
  var curMonth = map(mth,1,12,0,350);
  noStroke();
  ellipse(x, y, mthR, mthR);
  fill(80);
  noStroke();
  ellipse(x + cos(curMonth-90)*(mthR/2), y + sin(curMonth-90)*(mthR/2), 30, 30);

  // day
  var curDay = map(dy,1,31,0,350);
  noFill();
  ellipse(x, y, dayR, dayR);
  fill(150);
  noStroke();
  ellipse(x + cos(curDay-90)*(dayR/2), y + sin(curDay-90)*(dayR/2), 12, 12);



}
