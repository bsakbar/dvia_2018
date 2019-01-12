var totals;
var coldWar;
var Y_AXIS = 1;
var X_AXIS = 2;
var spacing = 10;
var b1, b2, c1, c2;
var years = 41;

function preload(){
  totals = loadJSON('data/totals.json');
  coldWar = loadTable('data/coldWar_budget.csv','csv','header');
  ShareTechMono = loadFont('data/ShareTechMono-Regular.ttf');

}

function setup() {
  createCanvas(800,800);
  textFont(ShareTechMono);
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  noLoop();
  print(totals);
  print(coldWar);

}

function draw(){
  //BG gradient
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);

  // lines
  var spending, test;
  for (var i = 0; i < coldWar.rows.length; i++){
    stroke('#E2E2E2')
    strokeWeight(0.75);
    spending = coldWar.rows[i].arr[1];
    spending = map(spending, 0, 260, 40, 370)
    line(40, 100+i*spacing, spending, 100+i*spacing);

    stroke('#E2E2E2');
    strokeWeight(0.75);
    test = totals.tests.United_States[i+3];
    test = map(test, 0, 100, 760, 430)
    line(760, 100+i*spacing, test, 100+i*spacing);

  }

  stroke('#6AD8DB');
  strokeWeight(0.7);
  line(40, 80, 370, 80);
  line(430, 80, 760, 80);
  line(40, 123+spacing*39, 760, 123+spacing*39);


  strokeWeight(0.7);
  line(40, 730, 247, 730);

  strokeWeight(0.2);
  line(600, 80, 600, 102+spacing*41);
  line(200, 80, 200, 102+spacing*41);



  noStroke();
  textAlign(LEFT);
  fill('#6AD8DB');
  textSize(53);
  text('COLD', 38, 718);
  text('WAR', 164, 718);

  fill('#6AD8DB');
  textSize(14);
  text('The United States Nuclear', 40, 640);
  text('Tests & Spending during the', 40, 655);

  fill('#B6D6D6');
  textSize(14);
  text('1948-1987', 40, 758);

  textSize(14);
  textAlign(LEFT);
  text('Spending in Billions', 40, 40);

  textSize(14);
  textAlign(RIGHT);
  text('Total Tests', 760, 40);

  fill('#6AD8DB');
  textSize(9);
  textAlign(CENTER);
  text('1948', 20, 103);
  text('1958', 20, 103+spacing*10);
  text('1968', 20, 103+spacing*20);
  text('1978', 20, 103+spacing*30);
  text('1987', 20, 103+spacing*39);

  text('0', 40, 70);
  text('260', 363, 70);

  text('100', 436, 70);
  textAlign(RIGHT);
  text('0', 760, 70);

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == Y_AXIS) {
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 1, 0.8);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }

}
