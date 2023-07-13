let bajo;
let vocals;
let extra;
let drums;

let song = [];
let anyPlaying = false;

let fftVocals
let ampVocals
let waveVocals = []
let levelVocals = []

let fftBajo
let ampBajo
let waveBajo = []
let levelBajo = []

let fftExtra
let ampExtra
let waveExtra = []
let levelExtra = []

let fftDrums
let ampDrums
let waveDrums = []
let levelDrums = []


// Declaración variables de fuente normal y bold
let fuente
let fuenteBold

function preload() {
  // Carga de fuentes
  fuente = loadFont('fuentes/CormorantGaramond-Regular.ttf')
  fuenteBold = loadFont('fuentes/CormorantGaramond-Bold.ttf')
  // carga de sonidos
  bajo = loadSound('audio/Bajo.mp3');
  vocals = loadSound('audio/Vocals.mp3');
  extra = loadSound('audio/Extra.mp3');
  drums = loadSound('audio/Drums.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = [bajo, vocals, extra, drums];

  // VOCAL
  fftVocals = new p5.FFT()
  fftVocals.setInput(vocals)
  
  ampVocals = new p5.Amplitude()
  ampVocals.setInput(vocals)

  //BAJO
  fftBajo = new p5.FFT()
  fftBajo.setInput(bajo)
  
  ampBajo = new p5.Amplitude()
  ampBajo.setInput(bajo)

  //EXTRA
  fftExtra = new p5.FFT()
  fftExtra.setInput(extra)
  
  ampExtra = new p5.Amplitude()
  ampExtra.setInput(extra)

  //DRUMS
  fftDrums = new p5.FFT()
  fftDrums.setInput(drums)
  
  ampDrums = new p5.Amplitude()
  ampDrums.setInput(drums)
}

function draw() {

  if(!anyPlaying) {
    noStroke()
    fill(10, 11, 10)
    rect(0, 0, windowWidth, windowHeight)

    fill(255,255,255)

    textSize(121)
    textFont(fuenteBold)
    text('QUEEN', 55, 310)

    textSize(45)
    textFont(fuente)
    text('Bohemian Rhapsody', 55, 370)

    textSize(25)
    textFont(fuenteBold)
    text('P   Play / Pausa', windowWidth * 0.66, 250)
    textFont(fuente)
    text('↑   Extra', windowWidth * 0.66, 280)
    text('↓   Drums', windowWidth * 0.66, 310)
    text('→  Bajo', windowWidth * 0.66, 340)
    text('←  Voz', windowWidth * 0.66, 370)

    textSize(20)
    text('Fernández Sasso - Hernández Alfonzo', 55, windowHeight - 70)
  }

  else{
    background(243, 212, 15)
    visual()
  }
}

function keyPressed() {
  fill(255,0,0)

  // PLAY / PAUSA
  if (key === 'p') {
    if (anyPlaying) {
      bajo.pause();
      vocals.pause();
      extra.pause();
      drums.pause();
    } 
    
    else {
      bajo.play();
      vocals.play();
      extra.play();
      drums.play();
    }
  
    anyPlaying = !anyPlaying;
  }

  //INSTRUMENTOS ON / OFF
  // BAJO ON / OFF
  if (keyCode === RIGHT_ARROW) {
    if (bajo.getVolume() === 1) {
      bajo.setVolume(0);
    } else {
      bajo.setVolume(1);
    }
  }

  // DRUMS ON / OFF
  if (keyCode === DOWN_ARROW) {
    if (drums.getVolume() === 1) {
      drums.setVolume(0);
    } else {
      drums.setVolume(1);
    }
  }

  // VOZ ON / OFF
  if (keyCode === LEFT_ARROW) {
    if (vocals.getVolume() === 1) {
      vocals.setVolume(0);
    } else {
      vocals.setVolume(1);
    }
  }

  // EXTRA ON / OFF
  if (keyCode === UP_ARROW) {
    if (extra.getVolume() === 1) {
      extra.setVolume(0);
    } else {
      extra.setVolume(1);
    }
  }
}

function visual() {
  // EXTRA
  levelExtra = ampExtra.getLevel()
  waveExtra = fftExtra.waveform();

  let offset = width / waveExtra.length;
  let x = 0 + width/4;

  fill(10, 11, 10);
  noStroke();
  rect(x, 0, width, windowHeight / 2);

  stroke(30, 135, 198);
  strokeWeight(3);

  for (let i = 0; i < waveExtra.length; i++) {
    let y = map(waveExtra[i], -1, 1, 0, 300);
    line(x, 0, x, y);
    x = x + offset;
  }

  //DRUMS
  waveDrums = fftDrums.waveform()

  noStroke()
  fill(41, 166, 55)
  rect(width/4, windowHeight/2, width/4 * 1.5, windowHeight/2);

  levelDrums.push(ampDrums.getLevel());

  for (let i = 0; i < levelDrums.length; i++) {
    let diam = map(levelDrums[i], 0, 1, 0, 1000);

    noFill();
    stroke(10, 11, 10);
    strokeWeight(2);
    ellipse(width/4 + (width/4 * 1.5) / 2, windowHeight/2 + windowHeight/4, diam);
  }

  if (levelDrums.length > 20) {
    levelDrums.shift();
  }


  // VOZ
  waveVocals = fftVocals.waveform()
  levelVocals = ampVocals.getLevel()

  fill(217, 24, 23)
  noStroke()
  rect(0,0,width/4,windowHeight)

  push();
  stroke(10, 11, 10);
  strokeWeight(2);
  noFill();

  beginShape();
  let y = 0; // Ajuste del valor inicial de 'y'
  let x2 = width / 8; // Ajuste de la coordenada 'x'
  for (let i = 0; i < waveVocals.length; i++) {
    let ancho = map(waveVocals[i], -1, 1, 0, width/4);
    curveVertex(ancho, y);
    y = y + windowHeight / waveVocals.length; // Incremento de 'y' después de usarlo en curveVertex()
  }
  endShape();
  pop();
  

  // BAJO
  waveBajo = fftBajo.waveform()
  levelBajo = ampBajo.getLevel()
  
  fill(10, 11, 10);
  
  let bar_width = (width * 3 / 8) / 10;
  
  for (let i = 0; i < 10; i++) {
  // Calcula la altura de la barra basada en la onda de la canción
  let bar_height = map(waveBajo[i], 0, 1, 0, windowHeight); // Ajusta el factor de escala aquí

  // Calcula la posición x de la barra dentro del rectángulo
  let bar_x = width * 5 / 8 + i * bar_width;

  // Dibuja la barra
  rect(bar_x, windowHeight - bar_height, bar_width, bar_height);
}
}