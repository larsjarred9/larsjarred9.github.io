"use strict";

let canvasWidth = 800;
let canvasHeight = 600;
let numberOfMushRooms = 4000;

let ctx;
let sheet;
let mushrooms = [];

class Mushroom {
  constructor(sourceX, sourceY, sourceWidth, sourceHeight, positionX, positionY, speedX, speedY) {
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
    this.positionX = positionX;
    this.positionY = positionY;
    this.speedX = speedX;
    this.speedY = speedY;

  }
  move() {
    this.positionX += this.speedX;
    this.positionY += this.speedY;

    // Wrap
    if (this.speedX > 0 && this.positionX > canvasWidth) {
      this.positionX = 0;
    }

    if (this.speedX < 0 && this.positionX < canvasWidth) {
      this.positionX = canvasWidth;
    }

    if (this.speedY > 0 && this.positionY > canvasHeight) {
      this.positionY = 0;
    }

    if (this.speedY < 0 && this.positionY < canvasHeight) {
      this.positionY = canvasHeight;
    }
  }
  draw() {
    ctx.drawImage(sheet, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.positionX, this.positionY, this.sourceWidth, this.sourceHeight);
  }
}

window.onload = function () {
  sheet = new Image();

  let canvas = document.getElementById('mario');
  ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  mushrooms = [];

  //maak sprites aan
  for (let i = 0; i < numberOfMushRooms; i++) {
    mushrooms.push(new Mushroom(520, 120, 18, 18, 10, 50, Math.random() * 4, Math.random() * 4));
  }

  var gameLoop = function () {
    //clear canvas
    ctx.fillstyle = "#9999ee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    //Update en teken alle sprites
    for (let i = 0; i < numberOfMushRooms; i++) {
      mushrooms[i].move();
      mushrooms[i].draw();
    }

    requestAnimationFrame(gameLoop);
  }

  // Als sprite is geladen
  sheet.addEventListener('load', function () {
    requestAnimationFrame(gameLoop);
  }, false);

  // Voeg sheet toe
  sheet.src = "sheet.png";
}