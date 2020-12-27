var image = null;
var grayimage = null;
var redImage = null;
var fgCanvas;
fgCanvas = document.getElementById("can");

function upload() {
  var file = document.getElementById("finput");
  image = new SimpleImage(file);
  grayimage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  image.drawTo(fgCanvas);
}
function imageisloaded(img){
  if(img == null || !img.complete())
  {
    alert("Image is not loaded");
    return false;
    }
  else
    {
      return true;
    }
}
function makegray(){
  if(imageisloaded(grayimage)){
    filtergray();
    grayimage.drawTo(fgCanvas);
  }
}
function filtergray(){
  for(var pixel of grayimage.values())
    {
var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
}
function makeRed() {
  if (imageisloaded(redImage)) {
    filterRed();
    redImage.drawTo(fgCanvas);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 235);
      pixel.setBlue(2 * avg - 235);
    }
  }
}

function ImageReset() {
  if (imageisloaded(image)) {
    image.drawTo(fgCanvas);
    grayimage = new SimpleImage(image);
    redImage = new SimpleImage(image);
  }
}