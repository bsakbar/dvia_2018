// Todo:
// 1. move vertical lines
// 2. color per country
// 3. total for red circles in the middle
// 4. color and size of circles for biggest country per year

var all_data;
var total_data;
var spacing = 6.94;
var firstLine = 50;
var lastLine = 550;
var years = 72;
var line_length = 170

function preload(){
  all_data = loadJSON('data/all.json')
  total_data = loadJSON('data/totals.json')
  Helvetica_Bold = loadFont('data/Helvetica-Bold.ttf');
  Helvetica_Light = loadFont('data/Helvetica-Light.ttf');
}

function setup(){
  createCanvas(600, 600);
  // background(12,32,50);
  background(200);
  noLoop();
  //var palette = Brewer.divergent('Reds', Infinity, -60, 0, 80)

  print(all_data);
  print(total_data);


}

function draw(){
  //headline

  noStroke();
  fill(255,62,62);
  textFont(Helvetica_Bold);
  textSize(30);
  text('Nuclear Testing', 50, 70);

  //red baseline
  stroke(255,62,62);
  strokeWeight(0.5);
  line(50,300,550,300);

  //line years
  stroke(150);
  strokeWeight(0.5);

  var totals = [];
    for(var i = 0; i <= years; i++) {
        totals.push(int(all_data.years[i].total.tests))
        if (totals[i] != 0){
          u = all_data.years[i].total.underground / totals[i]
          a = all_data.years[i].total.atmospheric / totals[i]
          line(firstLine, 300-a*line_length, firstLine, 300+u*line_length);
        }
        firstLine += spacing;
    }
    //red circles (total)
    noStroke();
    fill(255,62,62,90);
    for (let i=0; i<totals.length; i++){
      if (totals[i] > 0){
        // print(i)
        var radius = map(totals[i],1,179,1,80)
        ellipse(50+spacing*i,300,radius,radius);
      }
    }

    // ellipse(150,300,10,10);
    // ellipse(250,300,10,10);
    // ellipse(350,300,10,10);
    // ellipse(450,300,10,10);

  // var topValues = totals.sort((a,b) => a>b).slice(0,5);
  // console.log(totals.sort((a, b) => b - a));
  // console.log(totals.keys().sort((a, b) => totals[b] - totals[a]));
  // var result = Array.from(Array(totals.length).keys()).sort((a, b) => totals[a] < totals[b] ? -1 : (totals[b] < totals[a]) | 0)
  // console.log(result)

  //1945
  textFont(Helvetica_Light);
  noStroke();
  translate(50,535);
  textAlign(CENTER);
  rotate(-HALF_PI);
  textSize(6);
  fill(255,62,62);
  for (let i=0; i<= total_data.years.length; i++){
    text(total_data.years[i], 0, spacing*i+3);
    // text('1980', 0,spacing*years/2+3);
    // text('2017',0, lastLine-47);
  }

}
