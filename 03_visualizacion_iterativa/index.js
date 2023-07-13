let velocidad = 10
let x = 0

let velocidad2 = 0
let y = 255

let z = 0

let startTime = 0

function reset_millis() {
  startTime = millis()
}

function reset_variables() {
  velocidad = 10
  x = 0
  velocidad2 = 0
  y = 255
  z = 0
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  reset_millis()
}

function draw() {

  let elapsedTime = millis() - startTime

  if (elapsedTime < 19000) {

    if (velocidad > width * 2) {
    velocidad = -velocidad;
    } 
    
    else {
      for (let diam = 0; diam < 800; diam = diam + 60) {
        fill(0, 0, 0, 5)
        strokeWeight(10)
        stroke(255, x, 0)
        ellipse(width/2, height/2, diam + velocidad)
        velocidad = velocidad + 1
      }
    x = x + 1
    }
 
  } 
  
  else if (elapsedTime < 28000) {
    strokeWeight(5)
    stroke(255, y, 0, 60)
    y = y - 1
    fill(0)

    for (let y = -height; y < height; y = y + 30) {
      for (let x = -width; x < width; x = x + 30) {
        ellipse(x + velocidad2, y + velocidad2, 20)
      }
    }

    velocidad2 = velocidad2 + 2

    if (velocidad2 > height/1.5) {
    velocidad2 = 0
    }
  } 
  
  else if (elapsedTime < 37000) {
    if (z < 255) {
    z = z + 1
    } 

    else {
    z = -z
    }

    for (let loc = 0; loc < width; loc = loc + 20) {
      sorteo = random(10, height)
      fill(0)
      strokeWeight(2)
      stroke(255, z, 0)
      rect(loc, height - sorteo, 20)
    }
  }

  if (elapsedTime < 36000) {
    textAlign(CENTER, CENTER)
    textSize(70)
    strokeWeight(4)
    stroke(255)
    noFill()
    text("THATS ON ME", width/2, height/2)
  }

if(elapsedTime > 4000 && elapsedTime < 9000){
    textAlign(CENTER, CENTER)
    textSize(70)
    strokeWeight(4)
    stroke(255)
    noFill()
    text("I KNOW", width/2, height/1.5)
  }

else {
  textAlign(CENTER, CENTER);
  textSize(70)
  strokeWeight(4)
  stroke(255)
  noFill()
  text("- BY MAC MILLER", width/2, height/1.5)
}

  if (elapsedTime > 37000) {
    reset_millis();
    reset_variables();
  }
}
