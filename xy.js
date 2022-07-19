var cw, ch;
var xmin, xmax, ymin, ymax;
var canvas, ctx;
var canvasImageData; 

//ＣＡＮＶＡＳの定義
function setCanvas(canvasname, backcolor) {
  //描画コンテキストの取得
  canvas = document.getElementById(canvasname);
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  ctx = canvas.getContext('2d');
  //CANVASを黒く塗りつぶす
  ctx.fillStyle = backcolor;
  ctx.beginPath();
  ctx.fillRect(0,0,cw,ch);
  ctx.stroke();
}

//直線を引く
function drawLine(x0,y0, x1,y1, linecolor,linewidth) {
  var cx0,cy0,cx1,cy1;
  cx0 = Math.round((x0-xmin)/(xmax-xmin)*cw);
  cy0 = Math.round((ymax-y0)/(ymax-ymin)*ch);
  cx1 = Math.round((x1-xmin)/(xmax-xmin)*cw);
  cy1 = Math.round((ymax-y1)/(ymax-ymin)*ch);
  ctx.strokeStyle = linecolor; 
  ctx.lineWidth = linewidth;   
  ctx.beginPath();
  ctx.moveTo(cx0,cy0);
  ctx.lineTo(cx1,cy1);
  ctx.stroke();
  ctx.closePath();
}
   