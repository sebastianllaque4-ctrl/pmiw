/*
Integrantes: Niklas German Rocha y Sebastian Llaque Blanco
Comision: 3
Legajos: 125672/7 y 125611/3

Link del video: https://youtu.be/gycj-40KjU0
*/

let escenas = [];

let estadoActual = "Menu";
let escenaActual = 0;
let musica;
let lore1 = 0;
let lore2 = 0;
let animX = -100;
let animY = 500;

const datosDeEscenas = [
  {
    id: 0,
    nombre: 'inicio.jpeg',
    texto: "Leo se despierta en un dia soleado por la mañana, desayuna algo y enciende su pc para entrar a su vlog",
    botones: [
      { identificador: "Continuar", x: 280, y: 380, w: 240, h: 45, destino: 1 }
    ]
  },
  
  {
    id: 1,
    nombre: 'vlog.jpeg',
    texto: "Navegando por su vlog, descubre que la gente esta hablando de un hospital abandonado a las afueras de la ciudad, asi que se prepara para salir a explorar",
    botones: [
      { identificador: "Continuar", x: 280, y: 380, w: 240, h: 42, destino: 2 }
    ]
  },
  
  {
    id: 2,
    nombre: 'llegada.jpeg',
    texto: "Leo llega al hospital, tiene su cámara lista para grabar y sacar fotos, aunque algo no le sienta muy bien...",
    botones: [
      { identificador: "Volver a Casa", x: 120, y: 380, w: 240, h: 42, destino: 12 },
      { identificador: "Adentrarse y Explorar", x: 440, y: 380, w: 240, h: 42, destino: 3 }
   ]
  },
  
  {
    id: 3,
    nombre: 'caminos.jpeg',
    texto: "Al entrar en el hospital, Leo tiene la decision de tomar 2 pasillos, el de la izquierda o la derecha",
    botones: [
      { identificador: "Ir por la Izquierda", x: 120, y: 380, w: 240, h: 42, destino: 4 },
      { identificador: "Ir por la Derecha", x: 440, y: 380, w: 240, h: 42, destino: 5 }
   ]
  },
  
  {
    id: 4,
    nombre: 'camino1.jpeg',
    texto: "Leo camina por el pasillo izquierdo, grabando sus alrededores y notando algo en el suelo",
    botones: [
      { identificador: "Ignorarlo", x: 120, y: 380, w: 240, h: 42, destino: 6 },
      { identificador: "Investigar", x: 440, y: 380, w: 240, h: 42, destino: "Lore1" }
   ]
  },
  
  {
    id: 5,
    nombre: 'camino2.jpeg',
    texto: "Leo toma el camino de la derecha, este resulta ser mas oscuro y Leo prende su linterna, viendo una bifurcacion en su camino",
    botones: [
      { identificador: "Continuar por el pasillo", x: 120, y: 380, w: 240, h: 42, destino: 6 },
      { identificador: "Investigar", x: 440, y: 380, w: 240, h: 42, destino: 7 }
   ]
  },
  
  {
    id: 6,
    nombre: 'guardia.jpeg',
    texto: "Leo llega a la guardia del hospital, viendo como esta conecta con el otro pasillo y con otros 3 lugares, ¿por donde deberia ir?",
    botones: [
      { identificador: "Pasillo Izquierdo", x: 40, y: 380, w: 136, h: 42, destino: 4 },
      { identificador: "Pasillo Derecho", x: 186, y: 380, w: 136, h: 42, destino: 5 },
      { identificador: "Ir a los Baños", x: 332, y: 380, w: 136, h: 42, destino: 8 },
      { identificador: "Ir a Cafetería", x: 478, y: 380, w: 136, h: 42, destino: 9 },
      { identificador: "Habitaciones", x: 624, y: 380, w: 136, h: 42, destino: 10 }
   ]
  },
  
  {
    id: 7,
    nombre: 'camino2A.jpeg',
    texto: "Leo se adentra en una sala conectada al pasillo y encuentra un documento en el suelo",
    botones: [
      { identificador: "Ignorarlo y volver", x: 120, y: 380, w: 240, h: 42, destino: 5},
      { identificador: "Tomarlo", x: 440, y: 380, w: 240, h: 42, destino: "Lore2"}
    ]
  },
  
  {
    id: 8,
    nombre: 'baños.jpeg',
    texto: "Leo entra en los baños y el olor lo marea, graba lo que puede y se retira",
    botones: [
      { identificador: "Volver", x: 280, y: 380, w: 240, h: 45, destino: 6}
    ]
  },
  
  {
    id: 9,
    nombre: 'cafeteria.jpeg',
    texto: "Leo se adentra en la cafeteria, pero no encuentra mucho, su estres aumenta debido a que siente como si alguien lo observara",
    botones: [
      { identificador: "Volver", x: 280, y: 380, w: 240, h: 45, destino: 6}
    ]
  },
  
  {
    id: 10,
    nombre: 'pasillos.jpeg',
    texto: "Leo toma el pasillo de las habitaciones, en cada una hay una cama sin colchon y moho, al final del pasillo ve la salida de emergencia, aunque tambien ve una de las habitaciones bloqueada con maderas",
    botones: [
      { identificador: "Irse", x: 120, y: 380, w: 240, h: 42, destino: 13},
      { identificador: "Investigar", x: 440, y: 380, w: 240, h: 42, destino: 11}
    ]
  },
  
  {
    id: 11,
    nombre: 'secreto.jpeg',
    texto: "Leo rompe las maderas con una roca y entra a investigar, allí descubre un uniforme de enfermera muy desgastado y antiguo, que es practicamente una reliquia de aquella epoca y decide llevarselo",
    botones: [
      { identificador: "Irse", x: 280, y: 380, w: 240, h: 45, destino: 14}
    ]
  },
  
  {
    id: 12,
    nombre: 'final1.jpeg',
    texto: "Leo decide no entrar al hospital y en su lugar, vuelve a casa",
    botones: [
      { identificador: "Continuar", x: 280, y: 380, w: 240, h: 45, destino: "Creditos"},
    ]
  },
  
  {
    id: 13,
    nombre: 'final2.jpeg',
    texto: "Leo sale por la salida de emergencia y da vuelta al hospital, grabando el exterior antes de cortar la grabacion y volver a casa para publicar el video",
    botones: [
      { identificador: "Continuar", x: 280, y: 380, w: 240, h: 45, destino: "Creditos"},
    ]
  },
  
  {
    id: 14,
    nombre: 'final3.jpeg',
    texto: "Leo sale por la salida de emergencia ycorta su grabacion, en lugar de irse a casa, va a un museo de medicina a entregar el uniforme, donde lo recompensan con $50 dolares!",
    botones: [
      { identificador: "Continuar", x: 280, y: 380, w: 240, h: 45, destino: "Creditos"},
    ]
  }
];

function preload() {
  escenas = datosDeEscenas;
  
  datosDeEscenas[0].img = loadImage("data/img/inicio.jpeg");
  datosDeEscenas[1].img = loadImage("data/img/vlog.jpeg");
  datosDeEscenas[2].img = loadImage("data/img/llegada.jpeg");
  datosDeEscenas[3].img = loadImage("data/img/caminos.jpeg");
  datosDeEscenas[4].img = loadImage("data/img/camino1.jpeg");
  datosDeEscenas[5].img = loadImage("data/img/camino2.jpeg");
  datosDeEscenas[6].img = loadImage("data/img/guardia.jpeg");
  datosDeEscenas[7].img = loadImage("data/img/camino2A.jpeg");
  datosDeEscenas[8].img = loadImage("data/img/toilet.jpeg");
  datosDeEscenas[9].img = loadImage("data/img/cafeteria.jpeg");
  datosDeEscenas[10].img = loadImage("data/img/pasillos.jpeg");
  datosDeEscenas[11].img = loadImage("data/img/secreto.jpeg");
  datosDeEscenas[12].img = loadImage("data/img/final1.jpeg");
  datosDeEscenas[13].img = loadImage("data/img/final2.jpeg");
  datosDeEscenas[14].img = loadImage("data/img/final3.jpeg");
  musica = loadSound("data/musica.mp3");
}

function setup() {
  createCanvas(800, 450);
  musica.setVolume(0.1);
}


function draw() {
  background(0);
  if (estadoActual === "Menu"){
    dibujarMenu();
  } else if (estadoActual === "Juego"){
    dibujarJuego(escenaActual);
  } else if (estadoActual === "Creditos"){
    dibujarCreditos();
  } else if (estadoActual === "Lore1"){
    dibujarLore1();
  } else if (estadoActual === "Lore2"){
    dibujarLore2();
  } else if (estadoActual === "Bloqueado"){
    dibujarBloqueado();
  }
}

function dibujarMenu(){
  background(0);
  
  push();
  fill(255);
  textSize(40);
  text("Un Dia Maldito", 250, 80);
  pop();
  
  animX = -100;
  animY = 500;
  
  dibujarBoton("Iniciar Juego", width / 2 - 120, 190, 240, 48);

  dibujarBoton("Créditos", width / 2 - 120, 320, 240, 48);
}

function dibujarJuego(indexEscena = escenaActual){
  let esc = escenas[indexEscena];
  
  if (esc.img && esc.img.width > 0) {
    image(esc.img, 0, 0, width, 300);
  }

  fill(15, 18, 28, 230);
  stroke(60, 70, 100);
  strokeWeight(2);
  rect(40, 280, 720, 80, 8);

  noStroke();
  fill(240);
  textAlign(LEFT, TOP);
  textSize(14);
  text(esc.titulo, 55, 290);

  textSize(13);
  fill(210);
  text(esc.texto, 55, 312, 690, 42);

  for (let i = 0; i < esc.botones.length; i++) {
    let btn = esc.botones[i];
    dibujarBoton(btn.identificador, btn.x, btn.y, btn.w, btn.h);
  }
}

function dibujarLore1() {
  background(20, 28, 40);
  
  textAlign(CENTER, CENTER);
  fill(255, 215, 0);
  textSize(24);
  text("Pista de Lore #1 Descubierta", width / 2, 80);
  
  fill(220);
  textSize(14);
  text("Encuentras una nota antigua manchada en el suelo:\n'Hay rumores de que las enfermeras guardaban objetos de gran valor histórico\nen la habitación bloqueada al final del pasillo...'", width / 2, 170);

  dibujarBoton("Volver al Juego", 280, 340, 240, 42);
}

function dibujarLore2() {
  background(20, 28, 40);
  
  textAlign(CENTER, CENTER);
  fill(255, 215, 0);
  textSize(24);
  text("Pista de Lore #2 Descubierta", width / 2, 80);
  
  fill(220);
  textSize(14);
  text("Lees el informe oficial tirado en la sala de guardia:\n\n'El acceso fue tapiado con maderas débiles.\nCualquier herramienta o roca pesada bastaría para romperlas...'", width / 2, 170);

  dibujarBoton("Volver al Juego", 280, 340, 240, 42);
}

function dibujarBloqueado() {
  background(40, 20, 20);
  
  textAlign(CENTER, CENTER);
  fill(255, 100, 100);
  textSize(24);
  text("Habitación Bloqueada", width / 2, 80);
  
  fill(220);
  textSize(14);
  text("Leo observa las maderas tapiando la puerta, pero no se atreve a romperlas\nporque le falta información sobre lo que hay dentro y cómo hacerlo de forma segura.\n\nDebes encontrar el Lore 1 y el Lore 2 para poder ingresar.", width / 2, 170);

  dibujarBoton("Regresar al Pasillo", 280, 340, 240, 42);
}

function dibujarCreditos() {
  background(15, 18, 25);
  
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(28);
  text("Créditos", width / 2, 100);

  textSize(16);
  fill(180, 200, 230);
  text("Desarrollado por:", width / 2, 170);
  textSize(18);
  fill(255);
  text("Niklas German Rocha  &  Sebastian Llaque Blanco", animX, 200);

  textSize(14);
  fill(140, 150, 170);
  text("Comisión: 3  |  Legajos: 125672/7 y 125611/3", width / 2, animY);

  if (animX < width / 2) {
    animX++
  }
  
  if (animY > 240) {
    animY--
  }

  dibujarBoton("Volver al Menú", 280, 340, 240, 42);
}

function mousePressed() {
  if (estadoActual === "Menu") {
    if (estoySobreBoton(width / 2 - 120, 190, 240, 48)) {
      escenaActual = 0;
      estadoActual = "Juego";
      lore1 = 0;
      lore2 = 0;
      if (musica && !musica.isPlaying()) {
        musica.loop();
      }
    } else if (estoySobreBoton(width / 2 - 120, 320, 240, 48)) {
      estadoActual = "Creditos";
    }
  } 
  else if (estadoActual === "Juego") {
    let esc = escenas[escenaActual];
    if (!esc) return;

    for (let i = 0; i < esc.botones.length; i++) {
      let btn = esc.botones[i];
      if (estoySobreBoton(btn.x, btn.y, btn.w, btn.h)) {
        
        if (typeof btn.destino === "number") {
          if (btn.destino === 11) {
            if (lore1 === 1 && lore2 === 1) {
              escenaActual = 11;
            } else {
              estadoActual = "Bloqueado";
            }
          } else {
            escenaActual = btn.destino;
          }
        } else if (typeof btn.destino === "string") {
          estadoActual = btn.destino;
          if (btn.destino === "Lore1") {
            lore1 = 1;
          } else if (btn.destino === "Lore2") {
            lore2 = 1;
          }
        }
        break;
      }
    }
  } 
  else if (estadoActual === "Lore1") {
    if (estoySobreBoton(280, 340, 240, 42)) {
      escenaActual = 6;
      estadoActual = "Juego";
    }
  } 
  else if (estadoActual === "Lore2") {
    if (estoySobreBoton(280, 340, 240, 42)) {
      escenaActual = 6;
      estadoActual = "Juego";
    }
  } 
  else if (estadoActual === "Bloqueado") {
    if (estoySobreBoton(280, 340, 240, 42)) {
      escenaActual = 10;
      estadoActual = "Juego";
    }
  } 
  else if (estadoActual === "Creditos") {
    if (estoySobreBoton(280, 340, 240, 42)) {
      estadoActual = "Menu";
    }
  }
}

function estoySobreBoton(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

function dibujarBoton(txt, x, y, w, h, tamTexto = 14) {
  let sobre = estoySobreBoton(x, y, w, h);
  
  if (sobre) {
    fill(80, 110, 180);
    stroke(140, 180, 255);
    strokeWeight(2);
  } else {
    fill(45, 55, 80);
    stroke(80, 90, 110);
    strokeWeight(1);
  }
  rect(x, y, w, h, 6);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(tamTexto);
  text(txt, x + w / 2, y + h / 2);
}
