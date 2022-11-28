let curb;
let landfill;
let binR;
let binT;
let truckR;
let truckT;
let house = true;
let trash = false;
let recycle = false;
let trashbin = true;
let recyclebin = true;
let driveR = 800;
let driveT = 800;

function setup() {
  createCanvas(800, 600);
}

function preload() {
  curb = loadImage('assets/curb.png')
  landfill = loadImage('assets/landfill.png')
  binR = loadImage('assets/binR.png')
  binT = loadImage('assets/binT.png')
  truckT = loadImage('assets/truckT.png')
}

function draw() {
  if (house) {
    image(curb,0,0);
  } else { if (trash) {
      image(landfill,0,0);
    }  }

  if (trashbin) {
    image(binT,326,269);
  }
  if (recyclebin) {
    image(binR,221,269)
  }
  if (recycle) {
    driveR = driveR += 2;
    console.log('drive')
  }
  if (trash) {
    driveT = (driveT += 2)
  }
  image(truckR,250,driveR);
  image(truckT,250,driveT);

}

function mousePressed() {
  if (collidePointRect(mouseX,mouseY,221,259,96,130)) {
    recycle = true;
  }
  if (collidePointRect(mouseX,mouseY,326,269,96,130)) {
    trash = true;
  }
}