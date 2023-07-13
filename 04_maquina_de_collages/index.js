let png = [
  'Imagen 1.png',
  'Imagen 2.png',
  'Imagen 3.png',
  'Imagen 4.png',
  'Imagen 5.png'
];

let pngLoaded = [];

let i = 0;

function preload() {
  for (let index = 0; index < png.length; index++) {
    pngLoaded[index] = loadImage('imagenes/' + png[index]);
  }
}

function setup() {
  createCanvas(800, 800);
  background(0);
  frameRate(5);
}

function draw() {
  image(pngLoaded[i], random(800), random(800));
  i = i + int(random(1, 5)); // Use int() to convert random() result to an integer

  if (i >= pngLoaded.length) {
    i = 0;
  }
}


