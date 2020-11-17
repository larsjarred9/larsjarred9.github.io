"use strict";

let canvasWidth = 800;
let canvasHeight = 600;

// mushroom
let sourceX = 520;
let sourceY = 120;
let marioWidth = 18;
let marioHeight = 18;

let marioX = 10;
let marioY = 50;

let marioSpeedX = 5;
let marioSpeedY = 0;

// plant
let plantSourceX = 538;
let plantSourceY = 119;

let plantWidth = 18;
let plantHeight = 18;

let plantX = 10;
let plantY = 120;

let plantSpeedX = 5;
let plantSpeedY = 0;

// Feather
let feSourceX = 556;
let feSourceY = 120;

let feWidth = 18;
let feHeight = 18;

let feX = 10;
let feY = 200;

let feSpeedX = 5;
let feSpeedY = 0;

// Green
let greenSourceX = 574;
let greenSourceY = 119;

let greenWidth = 18;
let greenHeight = 18;

let greenX = 10;
let greenY = 260;

let greenSpeedX = 5;
let greenSpeedY = 0;

window.onload = function () {

  let sheet = new Image();   // maak nieuw img element

  let canvas = document.getElementById("mario");
  let ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false; // voorkom antialias effect

  var gameLoop = function () {
    // maak canvas leeg
    ctx.fillStyle = "#9999ee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Mushroom
    marioX += marioSpeedX;
    marioY += marioSpeedY;

    if (marioX > canvasWidth) {
      marioX = 0;
    }

    // Plant
    plantX += plantSpeedX;
    plantY += plantSpeedY;

    if (plantX > canvasWidth) {
      plantX = 0;
    }

    // Feather
    feX += feSpeedX;
    feY += feSpeedY;

    if (feX > canvasWidth) {
      feX = 0;
    }

    // green
    greenX += greenSpeedX;
    greenY += greenSpeedY;

    if (greenX > canvasWidth) {
      greenX = 0;
    }

    // teken
    ctx.drawImage(sheet, sourceX, sourceY, marioWidth, marioHeight, marioX, marioY, 64, 64);
    ctx.drawImage(sheet, plantSourceX, plantSourceY, plantWidth, plantHeight, plantX, plantY, 64, 64);
    ctx.drawImage(sheet, feSourceX, feSourceY, feWidth, feHeight, feX, feY, 64, 64);
    ctx.drawImage(sheet, greenSourceX, greenSourceY, greenWidth, greenHeight, greenX, greenY, 64, 64);

    // blijf loopen...
    requestAnimationFrame(gameLoop);
  }

  // als spritesheet is geladen, start dan gameloop
  sheet.addEventListener('load', function () {
    requestAnimationFrame(gameLoop);
  }, false);

  // zet bronbestand van plaatje. De browser begint na dit commando
  // naar het plaatje te zoeken en zal proberen het te laden. als dat gelukt is
  // wordt de event handler op regel 45 aangeroepen
  sheet.src = 'img/sheet.png';
};
