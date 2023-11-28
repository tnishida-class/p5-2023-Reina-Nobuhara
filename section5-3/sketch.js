function setup(){
  createCanvas(windowWidth, windowHeight);
  background(160, 192, 255);
  noStroke();

  fill(255, 204, 0);
  beginShape();
  for(let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = widthWidth/2 + cos(theta) * 10;
    //画面横幅の２分の１が星の中心のx座標→「2」を変更してクリスマスツリーの頂点に合わせる
    let y = windowHeight/2 + sin(theta) * 10;
    //画面縦幅の２分の１が星の中心のy座標→「２」を変更してクリスマスツリーの頂点に合わせる
    vertex(x, y);
  }
  endShape(CLOSE);
}
