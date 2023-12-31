// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
// テキスト「関数を使う」

function setup(){
  createCanvas(200, 200);
  background(0,51,153);　//背景を紺色に塗りつぶす
  noStroke();　//枠線なし

  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = width/2 + cos(theta) * width/4;
    let y = height/2 + sin(theta) * height/4;
    fill(255, 204, 0);
    star(x, y, width/20);
    }
  }

function star(cx,cy,r){ //星の書き方を定義する
  beginShape();//図形の書き始めを示す命令
  for(let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;//角度(方向)をtheta(シータ)で指定する//TWO_PI=１周分//3時方向が0度であるため、12時方向を0度とするためにマイナス半π(90度)//⭐️なんで2/5??
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    //円周上のある角度（theta)の座標（X，y）は、円の半径（r）、円の中心座標（width/2,height/2)を用いてx=r*cos(theta)+width/2,y=r*sin(theta)+height/2で表すことが出来る
    vertex(x, y);//次につなぐ点を一つ増やす
  }
  endShape(CLOSE);//点をつなぎ終わる
}