"use strict";

// Canvas Size
let canvasWidth = 800;
let canvasHeight = 600;

// plant Values
let plantSourceX = 538;
let plantSourceY = 119;

let plantWidth = 18;
let plantHeight = 18;

let plantX = 10;
let plantY = 120;

window.onload = function () {

  // Maak canvas aan en laad deze in + sprite initalization
  let sheet = new Image();   // maak nieuw img element
  sheet.src = 'img/sheet.png';
  let canvas = document.getElementById("mario");
  let ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false; // voorkom antialias effect
  // Laad canvas kleur in en de plant
  draw();


  function draw() {
    // maak canvas leeg
    ctx.fillStyle = "#9999ee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(sheet, plantSourceX, plantSourceY, plantWidth, plantHeight, plantX, plantY, 64, 64);
  }

  // Waneer je key indrukt bewegen
  window.addEventListener("keydown", moveSomething, false);
  function moveSomething(e) {
    switch (e.keyCode) {
      case 87:
        plantY -= 2;
        break;
      case 68:
        plantX += 2;
        break;
      case 83:
        plantY += 2;
        break;
      case 65:
        plantX -= 2;
        break;
    }
      // Laad canvas kleur in en de plant
    draw();
  }
};