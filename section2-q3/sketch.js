// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);//
  background(255);//背景を白にするl
  stroke(255);//白色の線
  strokeWeight(3);//線の太さを３にする

  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  drawCircle(black, maxR); // 黒色で、最大半径で円を描く
  drawArcs(green, red, maxR * 0.8); //緑と赤で、最大半径の0.8倍で扇形を描く
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawArcs(cream, black, maxR * 0.75); //中心に向かって円を上から重ねていく
  drawArcs(green, red, maxR * 0.5);//中心に向かって円を上から重ねていく
  drawArcs(cream, black, maxR * 0.45); //中心に向かって円を上から重ねていく
  drawCircle(green, maxR * 0.1);//緑色の円を描く
  drawCircle(red, maxR * 0.05);//赤色の円を描く
}

function drawCircle(c, r){
  const cx = width / 2; // 中心は (cx, cy)　widthは「全体幅」　x軸範囲の半分
  const cy = height / 2; //中心は(cx,cy) heightは「全体高さ」　y軸範囲の半分
  fill(c);　//塗りつぶし色をcにする
  ellipse(cx, cy, r, r);　//中心は(cx、cy) 半径はr
}

function drawArcs(c1, c2, r) {　//ここでのc1、c2のcは、colorのの"c"
  const cx = width / 2; // 中心は (cx, cy)　widthは「幅」
  const cy = height / 2; //中心は(cx,cy) heightは「高さ」
  for (let i = 0; i < 20; i++) {　//iは0~19の20。i++は、i＋1で一つずつ増えるという意味
    let start = TWO_PI / 20 * i; //スタートは、2π(一周)を20で割った扇形　× i番目
    let stop = TWO_PI / 20 * (i + 1); //ラストは、2π(一周)を20で割った扇形　× i+1番目　←扇形２個分で終わらない？
    fill(i % 2 == 0 ? c1 : c2);　//i÷2の余りが0ならc1、そうでないときはc2
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

