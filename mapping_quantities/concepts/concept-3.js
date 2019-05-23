// var map;
var cLon = 37.753;
var cLat = 28.766;
var zoom = 1.6;
var canvas;
var lonlat_data;


var lat = 24.7136;
var lon = 46.6753;
function preload(){
  all_data = loadJSON('data/all.json');
  total_data = loadStrings('data/totals.csv');
  lonlat_data = loadStrings('data/johnstons-archive-us-ussr.csv');
  Ubuntu_Bold = loadFont('data/UbuntuMono-Bold.ttf');
  Ubuntu_Regular = loadFont('data/UbuntuMono-Regular.ttf');
}

function mercX(lon){
  lon = radians(lon);
  var a = (256/PI) * pow(2,zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat){
  // Convert LongLat to x and y
  lat = radians(lat);
  var a = (256/PI) * pow(2,zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  return a * c;
}

function setup(){
  //change layer order
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0,0);
  canvas.style('z-index','+1');
  translate(width/2, height/2);

  // image(map, 0, 0);

  var cx = mercX(cLon);
  var cy = mercY(cLat);

  for (var i = 0; i < lonlat_data.length;i++) {
    var data = lonlat_data[i].split(/,/);
    var lat = data[9];
    var lon = data[10];
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    noStroke();
    //ussr
    if (i <= 982){
      fill (0,255,170,180);
      ellipse(x, y, 8,8);
    }
    //USA
    if (i >= 983 && i <= 1971){
      fill(255,0,75,180);
      ellipse(x, y, 8,8);
    }

  }


  // print(total_data);
  // print(lonlat_data);


  //legend
  // fill(45,45,45,170);
  // rect(-windowWidth/3-20,70, 900, 250);
  //
  //
  // textFont(Ubuntu_Bold);
  // noStroke();
  // textAlign(LEFT);
  // fill(255);
  // textSize(10);
  // textFont(Ubuntu_Regular);
  // text('Soviet Union', -windowWidth/3+30, 160);
  // text('United States', -windowWidth/3+138, 160);
  // textFont(Ubuntu_Bold);
  // text('Total Tests', -windowWidth/3+12, 220);
  //
  // textSize(8);
  //
  // text('1945', -windowWidth/3+12, 260);
  // text('2017', -windowWidth/3+383, 260);
  //
  // fill(255);
  // textFont(Ubuntu_Bold);
  // textSize(30);
  // text('Nuclear Tests', -windowWidth/3+10, 130);
  //
  //
  //
  // noStroke();
  // fill (0,255,170);
  // ellipse(-windowWidth/3+15, 157,10,10);
  //
  // noStroke();
  // fill(255,0,75);
  // ellipse(-windowWidth/3+123, 157,10,10);
  //
  //
  // stroke(255);
  // strokeWeight(0.3);
  // line(-windowWidth/3+12,270,-160,270);
  // line(-windowWidth/3+440,100,-windowWidth/3+440,290);
  //
  // noStroke();
  // fill(255,0,75,100);
  //


}

function resetSketch(){
  draw()
  setTimeout(resetSketch,1000);
}
