// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 600;
// Made to display count on screen
var lifeP;
// Keeps track of frame
var count = 0;
// keep track of generations
var generation = 0;
var genP;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.3;

// Dimensions of barrier
var rx = 175;
var ry = 150;
var rw = 50;
var rh = 10;

function setup() {
  createCanvas(400, 300);
  background(color(0, 0, 255));
  population = new Population();
  lifeP = createP();
  genP = createP();
  target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  //background(color(30, 100, 255));
  population.run();
  // Displays count to window
  lifeP.html(count);
  genP.html(generation);
  
  count++;
  
  population.grouphealth(); // brad
  if (population.allcrashed==true) {
    count = lifespan;
  }
  
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
    generation++;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
  //fill(color(0, 0, 255));
  //fill('rgba(0,255,0, 0.85)');
  fill(color(30, 100, 255));
  ellipse(200, 300, 400, 50);
}
