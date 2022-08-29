// Pixelate
let c = document.createElement("canvas");
ctx = c.getContext('2d');
let img1 = new Image();

var btn = document.getElementById("pixy-btn");
btn.onclick = function () {

  let selectedColors = getSelectedColors();
  console.log(selectedColors);

  img1.src = document.getElementById("img-orig-preview").src;

  w = img1.width;
  h = img1.height;
  c.width = w;
  c.height = h;
  ctx.drawImage(img1, 0, 0);

  pixelArr = ctx.getImageData(0, 0, w, h).data; // array of [r,g,b,a,r,g,b,a,..]
  pixel_size = 5;
  console.log(pixel_size);

  for (let y = 0; y < h; y += pixel_size) {
    for (let x = 0; x < w; x += pixel_size) {
      let p = (x + (y*w)) * 4;
      let rgb = {r: pixelArr[p], g: pixelArr[p+1], b: pixelArr[p+2]};
      let closest = getClosestColor(rgb, selectedColors);
      ctx.fillStyle = "rgba(" + closest.r + "," + closest.g + "," + closest.b + "," + pixelArr[p + 3] + ")";
      ctx.fillRect(x, y, pixel_size, pixel_size);
    }
  }

  let p = document.getElementById("img-orig-pixel");
  p.setAttribute('src', c.toDataURL("image/jpeg"));

};

function getSelectedColors() {

    let colors = [];
    selectedContainer = document.getElementById("selected-color-container");
    let children = selectedContainer.children;
    for (let i = 0; i < children.length; i++) {
      let tableChild = children[i];
      let hex = tableChild.id.substring(tableChild.id.indexOf("_")+1);
      let rbg = hexToRgb(hex);
      colors.push(rbg);
    }
    return colors;

}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getClosestColor(rgb, colorList) {

    // calculate distance to on all selected colors, compared to current pixel
    colorList.forEach(color => {
        color.distance = getColorDistance(rgb, color);
    });
    // return closest match
    return colorList.reduce(function(prev, curr) {
        return prev.distance < curr.distance ? prev : curr;
    });

}

function getColorDistance(a, b) {
    // https://en.wikipedia.org/wiki/Color_difference - Euclidean
    return Math.sqrt(Math.pow((a.r - b.r),2) + Math.pow((a.g - b.g),2) + Math.pow((a.b - b.b),2));
}
