// Pixelate
let c = document.createElement("canvas");
ctx = c.getContext('2d');
let img1 = new Image();
var btn = document.getElementById("pixy-btn");
btn.onclick = function () {

  img1.src = document.getElementById("img-orig-preview").src;

  w = img1.width;
  h = img1.height;
  c.width = w;
  c.height = h;
  ctx.drawImage(img1, 0, 0);

  var pixelArr = ctx.getImageData(0, 0, w, h).data; // array of [r,g,b,a,r,g,b,a,..]
  pixel_size = 30;
  console.log(pixel_size);

  for (let y = 0; y < h; y += pixel_size) {
    for (let x = 0; x < w; x += pixel_size) {
      let p = (x + (y*w)) * 4;
      ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
      ctx.fillRect(x, y, pixel_size, pixel_size);
    }
  }

  let p = document.getElementById("img-orig-pixel");
  p.setAttribute('src', c.toDataURL("image/jpeg"));

};
