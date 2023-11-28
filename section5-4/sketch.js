function setup(){
  createCanvas(120, 120);
  background(0, 51, 153);
  noStroke();

  fill(255, 204, 0);
  beginShape();
  for(let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = width/2 + cos(theta) * 50;
    let y = height/2 + sin(theta) * 50;
    vertex(x, y);
  }
  endShape(CLOSE);
}