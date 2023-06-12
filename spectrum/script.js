const WIDTH = 500;
const HEIGHT = 500;
const DELTA = 200;
const dots = [];
let canvas;

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  background(253, 254, 253);
  strokeWeight(15);
  stroke(0);
  line(0, 0, WIDTH, 0);
  line(0, 0, 0, HEIGHT);
  line(WIDTH, 0, WIDTH, HEIGHT);
  line(0, HEIGHT, WIDTH, HEIGHT);
  for (let i = 0; i < 5000; ++i)
    dots.push([random(WIDTH / 2 - DELTA, WIDTH / 2 + DELTA), random(HEIGHT / 2 - DELTA, HEIGHT / 2 + DELTA)]);
  for (let i = 0; i < dots.length; ++i) {
    strokeWeight(2);
    stroke(random(0, 255));
    line(WIDTH / 2, HEIGHT / 2, dots[i][0], dots[i][1]);
  }
}

function draw() {
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}