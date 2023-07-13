let lado = 200
let x = 0
let y = 0

function setup() {
    // Código inicial. Se ejecuta una sola vez
    createCanvas(windowWidth, windowHeight)
    background (0)

    frameRate(1)

  }
  
  function draw() {
    // Se ejecuta después de setup conitnuamente
    
    sorteo = random(0,4)

  if(sorteo < 1) {
    strokeWeight(0)
    fill(255,0,100)
    ellipse(x+lado/2, y+lado/2, lado, lado)
    rect(x+lado/2,y+lado/2,lado/2,lado/2)
    fill(100,0,100)
    ellipse(x+lado/2,y+lado/2,lado*0.75,lado*0.75)

    }
    else if(sorteo < 2){
      fill(255,0,100)
      ellipse(x+lado/2,y+lado/2,lado,lado)
      fill(100,0,100)
      ellipse(x+lado/2,y+lado/2,lado*0.75,lado*0.75)
      fill(255,0,100)
      ellipse(x+lado/2,y+lado/2,lado/2,lado/2)

    }
    else if(sorteo < 3){
      fill(100,0,100)
      rect(x,y,lado,lado)
      fill(255,0,100)
      rect(x+lado/4,y+lado/4,lado/2,lado/2)

    }
    else {
      fill(255,0,100)
      triangle(x, y, x+lado, y, x, y+lado)
      fill(100,0,100)
      triangle(x+lado,y,x+lado/2,y+lado/2,x+lado,y+lado)
    }

    x = x+lado


    if(x+lado > width){
      y = y+lado
      x = 0
    }

  }