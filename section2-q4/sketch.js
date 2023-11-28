// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++) {
    if(i%2==0){
      fill(blue); 
    }else{
      fill(255,255,255);
    }
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, d);
    //i=0 (0,0)(270、d) ２で割った余りが０だから「青」
    //i=1 (0,d)(270、2d)幅がwidth(270)高さ2dの長方形　２で割った余りが１だから「白」
  }


  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  
  fill(255,255,255);
  rect(d * 2,0,d,size)
  rect(0,d * 2,size,d)
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}