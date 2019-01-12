// from the coding train Fractal Tree toturial


var tree = [];
var leaves = [];
let mn = 0;
let sc = 0;

function setup() {
  createCanvas(400, 400);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);
  mn = minute();
  sc = second();
  tree[0] = root;
}

function oneSecondPassed(branchA) {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      if(branchA){
        tree.push(tree[i].branchA());
      } else {
        tree.push(tree[i].branchB());
      }
    }
    if(tree[i].has_branchB){
      tree[i].finished = true;
    }
  }

  // if(whichBranch == 'A'){
  //   tree.push(tree[tree.length-1].branchA());
  // }else{
  //   tree.push(tree[tree.length-2].branchB());
  // }

  if (sc == 56) {
  // if (sc %10 == 9) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
  background(134,115,255)
  let this_sc = second();

  // if (this_mn != mn){
  //   mn = this_mn
  //   minutePassed()
  // }
  if (this_sc != sc){
    sc = this_sc
    if (sc % 8 == 0){
      oneSecondPassed(true)
    }else if (sc % 8 == 4){
      oneSecondPassed(false)
    }
  }
  if (sc == 0){
  // if (sc %10 == 0){
    tree = []
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    var root = new Branch(a, b);
    tree[0] = root
  }
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255,143,115,100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0, 2);
  }

}
