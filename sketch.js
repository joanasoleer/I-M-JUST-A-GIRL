let img;

function preload() {
  img = loadImage('_Rose_-removebg-preview.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  let showOverlayBtn = createButton("I'M JUST A GIRL");
  showOverlayBtn.addClass("myButton");
  showOverlayBtn.mousePressed(showOverlay);

  let closeBtn = select("#close-overlay");
  closeBtn.mousePressed(hideOverlay);
}

function draw() {
  
  if (img) {
    image(img, (width - img.width) / 2, height - img.height);
  }
}

function showOverlay() {
  let overlay = select("#overlay");
  overlay.removeClass("hidden");
}

function hideOverlay() {
  let overlay = select("#overlay");
  overlay.addClass("hidden");
}

