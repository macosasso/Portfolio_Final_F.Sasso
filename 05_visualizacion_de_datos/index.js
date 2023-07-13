let data;
let maxCalidad;
let minCalidad;
let minPrecio;
let maxPrecio;
let minAnio;
let maxAnio;
let vinos;
let imgLoaded;
let foto = 0;

function preload() {
  data = loadJSON("./data/vinos_calidad.json");
  imgLoaded = loadImage('imagenes/Vino_etiqueta.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxCalidad = data.maxCalidad;
  minCalidad = data.minCalidad;
  minPrecio = data.minPrecio;
  maxPrecio = data.maxPrecio;
  minAnio = data.minAnio;
  maxAnio = data.maxAnio;
  vinos = data.vinos;
}

function draw() {
  // Llamada a funciones de gráfico
  background(255, 255, 204);
  drawGraph();

  // Títulos
  textSize(100);
  textAlign(CENTER);
  fill(86, 20, 12);
  text(`VINOS`, width / 2, 80);

  //subtitulo
  textSize(30);
  text(`Ordenados por calidad`, width / 2, 120);
  
  //imagen label
  image(imgLoaded, 570,10, imgLoaded.width /1.5, imgLoaded.height /1.5);

  VinosInfo();
}



function drawGraph() {
  // División en bordeaux y amarillo
  fill(86, 20, 12);
  noStroke();
  rect(0, height / 1.8, width, height);

  // Variables de ancho, punto de inicio y separación
  let barWidth = (width - vinos.length * 10) / vinos.length;
  let medioY = height / 1.8;
  let separacion = 10;

  // Graficación
  for (let i = 0; i < vinos.length; i++) {
    let vino = vinos[i];

    //mapeo de la calidad a la altura de la barra
    let barHeight = map(vino.calidad, minCalidad, maxCalidad, 0, medioY - 20);
    let y = medioY;

    // Mapeo del año a la opacidad de la barra
    let opacidad = map(vino.anio, minAnio, maxAnio, 50, 255);

    // Dirección de barra
    if (vino.tinto) {
      y -= barHeight;
      fill(86, 20, 12, opacidad);
    } else {
      fill(255, 255, 204, opacidad);
    }

    // Genera las barras
    rect(i * (barWidth + separacion), y, barWidth, barHeight);
  }
}



function VinosInfo() {
  let barWidth = width / vinos.length;

  for (let i = 0; i < vinos.length; i++) {
    let vino = vinos[i];
    let x = i * barWidth;

    if (mouseX >= x && mouseX <= x + barWidth) {
      fill(86, 20, 12);
      textAlign(CENTER);
      textSize(20);
      text(`${vino.nombre}`, width - 160, 220);
      text(`${vino.anio}`, width - 160, 240);
      text(`$${vino.precio}`, width - 160, 260);
    }
  }
}

