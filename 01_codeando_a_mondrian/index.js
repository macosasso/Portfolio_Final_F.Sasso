
function setup() {
    // Código inicial. Se ejecuta una sola vez
    createCanvas(1333, 768)
    background (200)
    
    fill(220)
    rect(282,0,768,768)
  
    strokeWeight(5)

    //fomras
    fill(255,0,0)
    rect(282,0,300,300)

    strokeWeight(0)
    fill(255,255,0)
    rect(282,500,80,300)

    strokeWeight(8)
    fill(0,0,255)
    rect(585,500,220,220)

    //lineas verticales
    strokeWeight(8)
    line(582,0,582,768)
    line(362,500,362,768)
    line(805,500,805,768)

    //lineas horizontales
    strokeWeight(12)
    line(282,300,1050,300)
    line(282,500,1050,500)

    strokeWeight(20)
    stroke(100)
    line(282,0,288,768)
    line(1050,0,1050,768)
  }
  
  function draw() {
    // Se ejecuta después de setup conitnuamente
  }