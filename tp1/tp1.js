let ancho = 800;
let alto = 600;

let animacionQuieto = [];
let animacionVolando = [];

let estadoActual = "quieto";

let velocidadAnimacion = 8;

let indiceFrame = 0;

let xPersonaje = 400;
let yPersonaje = 300;

function preload() {

  for (let i = 1; i <= 2; i++) {
    animacionQuieto[i - 1] = loadImage("data/slime_000"+i+".png");
    loadImage("data/slime_000"+i+".png");
  }
  for (let i = 1; i < 4; i++) {
    animacionVolando[i - 1] = loadImage("data/slime_volador_000"+i+".png");
    loadImage("data/slime_volador_000"+i+".png");
    loadImage("data/slime_volador_000"+i+".png");
    loadImage("data/slime_volador_000"+i+".png");
  }
}

function setup() {
  createCanvas(ancho, alto);
  imageMode(CENTER);
}

function draw() {
  background(220);
  switch(estadoActual) {
  case "quieto":

    actualizarAnimacion(animacionQuieto);

    dibujarPersonaje(animacionQuieto[indiceFrame], xPersonaje, yPersonaje);
    break;
  case "volando":

    actualizarAnimacion(animacionVolando);

    dibujarPersonaje(animacionVolando[indiceFrame], xPersonaje, yPersonaje);

    xPersonaje = xPersonaje + 2 ;
    if (xPersonaje > ancho + 50) xPersonaje = -50;
    break;
  }

  fill(0);
  textSize(20);
  text("estado:" + estadoActual, 20, 40);
  text("frame:" + (indiceFrame + 1), 20, 70);
  text("tiempo:" + frameCount, 20, 100);
  text("con + se AUMENTA la velocidad",20,130);
  text("con el - se DISMINUYE la velocidad",20,155);
  text("R = reiniciar",20,180);
}

function actualizarAnimacion(animacion) {
  if (frameCount % velocidadAnimacion === 0) {
    indiceFrame = siguienteFrame(indiceFrame, animacion.length);
  }
}

function siguienteFrame(actual, cantidadFrames) {
  let nuevo = actual + 1;
  if (nuevo >= cantidadFrames) {
    nuevo = 0 ;
  }
  return nuevo;
}

function dibujarPersonaje(imagen, posX, posY) {
  image(imagen, posX, posY);
}

function cambiarEstado(nuevoEstado) {
  estadoActual = nuevoEstado;
  indiceFrame = 0;
}

function reiniciarJuego() {
  estadoActual = "quieto";
  indiceFrame = 0 ;
  xPersonaje = 400;
  yPersonaje = 300;
  velociadadAnimacion = 8;
}

function keyPressed() {
  if (key === "1")
    cambiarEstado("quieto");
  if (key === "2")
    cambiarEstado("volando");
  if (key === "r" || key === "R")
    reiniciarJuego();
      if (key === "+") velocidadAnimacion = max(2, velocidadAnimacion - 1);

  if (key === "-") velocidadAnimacion = velociadadAnimacion + 1;
}
