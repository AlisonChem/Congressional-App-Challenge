let state = 'intro';
let timer;
let firecracker1, firecracker2;
let bgImg, bookImg, forestbuttonImg, oceanbuttonImg, citybuttonImg, firecrackersImg;
let startTime;
let cableFixed = false;
let firecracker1fixed = false;
let firecracker2fixed = false;
let firefixed = false;
let campfixed = false;
let trash;
let straws = [];
let plasticBags = [];
let bottles = [];
let sixpacks = [];
let numStraws = 2;
let numPlasticBags = 2;
let numBottles = 2;
let numSixpacks = 2;
let isDragging = false;
let showBottle1 = true;
let showBottle2 = true;
let showPlasicBag1 = true;
let showPlasicBag2 = true;
let showStraw1 = true;
let showStraw2 = true;
let showSixpack1 = true;
let showSixpack2 = true;
let car1, car2;
let car1fixed = false;
let car2fixed = false;

function preload() {
  bgImg = loadImage('assets/bg.png');
  bookImg = loadImage('assets/book.png');
  forestbuttonImg = loadImage('assets/forestbg.png');
  oceanbuttonImg = loadImage('assets/oceanbg.png');
  citybuttonImg = loadImage('assets/citybg.png');
  
  firecrackersImg = loadImage('assets/firecrackers.png');
  fixedcableImg = loadImage('assets/fixedcable.png');
  brokencableImg = loadImage('assets/brokencable.png');
  campfireImg = loadImage('assets/campfire.png');
  putoutfireImg = loadImage('assets/putoutfire.png');
  
  strawImg = loadImage('assets/straw.png');
  sixpackImg = loadImage('assets/sixpack.png');
  plasticbagImg = loadImage('assets/plasticbag.png');
  bottleImg = loadImage('assets/bottle.png');
  trashImg = loadImage('assets/trash.png');

  carImg = loadImage('assets/car.png');
  flipcarImg = loadImage('assets/flipcar.png');
  electriccarImg = loadImage('assets/electriccar.png');
  flipelectriccarImg = loadImage('assets/flipelectriccar.png');
}

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  
  bookImg.resize(600, 400);
  forestbuttonImg.resize(600, 400);
  oceanbuttonImg.resize(600, 400);
  citybuttonImg.resize(600, 400);
  firecrackersImg.resize(80, 80);
  campfireImg.resize(90, 80);
  putoutfireImg.resize(90, 80);
  
  trashImg.resize(200, 240);

  carImg.resize(170, 130);
  flipcarImg.resize(220, 170);
  electriccarImg.resize(220, 200);
  flipelectriccarImg.resize(220, 200);

  book = createSprite(400, 200, 600, 400);
  book.addImage(bookImg);
  book.visible = false;
  book.collider = 'static';

  timer = 60;
  startTime = millis();

  firecracker1 = createSprite(250, 365);
  firecracker1.addImage(firecrackersImg);
  firecracker1.visible = false;
  firecracker1.collider = 'static';

  firecracker2 = createSprite(650, 350);
  firecracker2.addImage(firecrackersImg);
  firecracker2.visible = false;
  firecracker2.collider = 'static';

  fixedcable = createSprite(350, 215);
  fixedcable.addImage(fixedcableImg);
  fixedcable.visible = false;
  fixedcable.collider = 'static';

  brokencable = createSprite(350, 215);
  brokencable.addImage(brokencableImg);
  brokencable.visible = false;
  brokencable.collider = 'static';

  campfire = createSprite(500, 320);
  campfire.addImage(campfireImg);
  campfire.visible = false;
  campfire.collider = 'static';

  putoutfire = createSprite(500, 320);
  putoutfire.addImage(putoutfireImg);
  putoutfire.visible = false;
  putoutfire.collider = 'static';

   straw1 = {
      x: 100,
      y: 100,
      width: 60,
      height: 60,
      collider: 'dynamic',
      isDragging: false
    };
    plasticBag1 = {
      x: 200,
      y: 150,
      width: 100,
      height: 100,
      collider: 'dynamic',
      isDragging: false
    };
    bottle1 = {
      x: 300,
      y: 50,
      width: 70,
      height: 50,
      collider: 'dynamic',
      isDragging: false
    };
    sixpack1 = {
      x: 150,
      y: 300,
      width: 90,
      height: 90,
      collider: 'dynamic',
      isDragging: false
    };
    straw2 = {
      x: 600,
      y: 250,
      width: 60,
      height: 60,
      collider: 'dynamic',
      isDragging: false
    };
    plasticBag2 = {
      x: 600,
      y: 75,
      width: 120,
      height: 120,
      collider: 'dynamic',
      isDragging: false
    };
    bottle2 = {
      x: 500,
      y: 330,
      width: 70,
      height: 50,
      collider: 'dynamic',
      isDragging: false
    };
    sixpack2 = {
      x: 250,
      y: 70,
      width: 100,
      height: 100,
      collider: 'dynamic',
      isDragging: false
    };

    trash = createSprite(745, 300, 200, 240);
    trash.addImage(trashImg);
    trash.visible = false;
    trash.collider = 'static';

    car1 = createSprite(150, 310, 80, 80);
    car1.addImage(carImg);
    car1.visible = false;
    car1.collider = 'static';

    car2 = createSprite(700, 350, 80, 80);
    car2.addImage(flipcarImg);
    car2.visible = false;
    car2.collider = 'static';

    fixedcar1 = createSprite(150, 310, 80, 80);
    fixedcar1.addImage(electriccarImg);
    fixedcar1.visible = false;
    fixedcar1.collider = 'static';

    fixedcar2 = createSprite(700, 340, 80, 80);
    fixedcar2.addImage(flipelectriccarImg);
    fixedcar2.visible = false;
    fixedcar2.collider = 'static';
}

function draw() {
  if (state === 'intro') {
    displayIntro();
  } else if (state === 'info') {
    brokencable.visible = false;
    fixedcable.visible = false;
    campfire.visible = false;
    putoutfire.visible = false;
    firecracker1.visible = false;
    firecracker2.visible = false;
    trash.visible = false;
    fixedcar1.visible = false;
    fixedcar2.visible = false;
    car1.visible = false;
    car2.visible = false;
    
    displayInfo();
  } else if (state === 'forestinfo') {
    displayForestInfo();
  } else if (state === 'oceaninfo') {
    displayOceanInfo();
  } else if (state === 'cityinfo') {
    displayCityInfo();
  } else if (state === 'forestmode') {
    displayForestMode();
  } else if (state === 'oceanmode') {
    displayOceanMode();
  } else if (state === 'citymode') {
    displayCityMode();
  } else if (state === 'failgameover') {
    displayFailForestMode();
  } else if (state === 'successgameover') {
    displaySuccessForestMode();
  } else if (state === 'oceansuccess') {
    displayOceanSuccessMode();
  } else if (state === 'citysuccess') {
    displaySuccessCityMode();
  }

  
  if (isDragging) {
    straw1.x = mouseX - straw1.width / 2;
    straw1.y = mouseY - straw1.height / 2;
    straw2.x = mouseX - straw2.width / 2;
    straw2.y = mouseY - straw2.height / 2;
    plasticBag1.x = mouseX - plasticBag1.width / 2;
    plasticBag1.y = mouseY - plasticBag1.height / 2;
    plasticBag2.x = mouseX - plasticBag2.width / 2;
    plasticBag2.y = mouseY - plasticBag2.height / 2;
    bottle1.x = mouseX - bottle1.width / 2;
    bottle1.y = mouseY - bottle1.height / 2;
    bottle2.x = mouseX - bottle2.width / 2;
    bottle2.y = mouseY - bottle2.height / 2;
    sixpack1.x = mouseX - sixpack1.width / 2;
    sixpack1.y = mouseY - sixpack1.height / 2;
    sixpack2.x = mouseX - sixpack2.width / 2;
    sixpack2.y = mouseY - sixpack2.height / 2;
  } 
}

function displayIntro() {
  background(bgImg);

  textSize(50);
  textFont('seven plus');
  textAlign(CENTER);
  fill(90, 189, 126);
  stroke("black");
  strokeWeight(3);
  text('TerraQuest', width / 2, height / 4);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 50, height * 3 / 4 - 10, 100, 40);
  fill(255);
  textSize(20);
  text('Go', width / 2, (height * 3 / 4) + 10);

  if (mouseIsPressed && 
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height * 3 / 4 - 20 && mouseY < height * 3 / 4 + 20) {
    state = 'info';
  }
}

function displayInfo() {
  background(bgImg);
  book.visible = true;
  drawSprites();

  textSize(25);
  textFont('Impact');
  textAlign(CENTER);
  fill("black");
  text('Instructions', 285, 55);

  textSize(25);
  textFont('Impact');
  textAlign(CENTER);
  text('Help!\nOur world is\nendangered by\nclimate change.\nFix each ecosystem\nto preserve the\nworld!', 285, 200);

  fill("green");
  rect(450, 120, 150, 40);
  fill("blue");
  rect(450, 180, 150, 40);
  fill("gray");
  rect(450, 240, 150, 40);

  fill(255);
  textSize(18);
  text('Forest', 525, 140);
  text('Ocean', 525, 200);
  text('City', 525, 260);

  if (mouseIsPressed && mouseX > 450 && mouseX < 600 && mouseY > 120 && mouseY < 160) {
    state = 'forestinfo';
  }

  if (mouseIsPressed && mouseX > 450 && mouseX < 600 && mouseY > 180 && mouseY < 220) {
    state = 'oceaninfo';
  }

  if (mouseIsPressed && mouseX > 450 && mouseX < 600 && mouseY > 240 && mouseY < 280) {
    state = 'cityinfo';
  }
}

function displayForestInfo() {
  background(forestbuttonImg); 

  fill(112, 67, 52);
  rect(width / 2 - 250, height / 2 - 100, 500, 200);

  fill(255);
  textSize(22);
  text('Humans are responsible for 75% of wildfires\nannually which pollute our environment\nand kill millions of plants and animals.\nEliminate any human causes that may cause a\nfire here within the time limit.', 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 50, height * 3 / 4 + 20, 100, 40);
  fill(255);
  textSize(20);
  text('Play!', width / 2, (height * 3 / 4) + 40);

  if (mouseIsPressed && 
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height * 3 / 4 + 20 && mouseY < height * 3 / 4 + 60) {
    state = 'forestmode';
    startTime = millis();   
  }
}

function displayOceanInfo() {
  background(oceanbuttonImg);  

  fill(112, 67, 52);
  rect(width/2 - 250, height/2 - 100, 500, 200);

  fill(255);
  textSize(22);
  text('There are millions of tons of plastic polluting\nour oceans and 100 million marine animals die\neach year from plastic waste. Help collect plastic\nand dispose of it correctly.', 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 50, height * 3 / 4 + 20, 100, 40);
  fill(255);
  textSize(20);
  text('Play!', width / 2, (height * 3 / 4) + 40);

  if (mouseIsPressed && 
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height * 3 / 4 + 20 && mouseY < height * 3 / 4 + 60) {
    state = 'oceanmode';
  }
}

function displayCityInfo() {
  background(citybuttonImg); 

  fill(112, 67, 52);
  rect(width/2 - 250, height/2 - 100, 500, 200);

  fill(255);
  textSize(22);
  text('Vehicles emit a variety of harmful gases from\nburning gasoline and diesel fuels. Just\na typical passenger vehicle emits about 4.6\nmetric tons of carbon dioxide per year. Convert\nall the gas-powered cars into electric-powered\ncars before the air gets too polluted.', 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 50, height * 3 / 4 + 20, 100, 40);
  fill(255);
  textSize(20);
  text('Play!', width / 2, (height * 3 / 4) + 40);

  if (mouseIsPressed && 
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height * 3 / 4 + 20 && mouseY < height * 3 / 4 + 60) {
    state = 'citymode';
  }
}

function displayForestMode() {
  background(forestbuttonImg);

    if (!cableFixed) {
        brokencable.visible = true;
        fixedcable.visible = false;
         }
    if (!firecracker1fixed) {
        firecracker1.visible = true;
    }
    if (!firecracker2fixed) {
        firecracker2.visible = true;
    }
    if (!campfixed) {
        campfire.visible = true;
        putoutfire.visible = false;
    }
    
    book.visible = false;
    drawSprites();
      if (startTime === undefined) {
           startTime = millis();
         }
         let elapsedTime = (millis() - startTime) / 1000;
         timer = max(0, 60 - Math.floor(elapsedTime));
         fill(255);
         textSize(24);
         textFont('Impact');
         textAlign(CENTER);
         text('Time left: ' + timer, 70, 20);
         if (timer === 0) {
           state = 'gameover';
         }
         
  if (mouseIsPressed && timer > 0 && mouseX > brokencable.position.x - 50 && mouseX < brokencable.position.x + 50 && mouseY > brokencable.position.y - 50 && mouseY < brokencable.position.y + 50) {
    brokencable.visible = false;
    fixedcable.visible = true;
    cableFixed = true;
  }
  if (mouseIsPressed && timer > 0 && mouseX > firecracker1.position.x - 40 && mouseX < firecracker1.position.x + 40 && mouseY > firecracker1.position.y - 40 && mouseY < firecracker1.position.y + 40) {
    firecracker1.visible = false;
    firecracker1fixed = true;
  }

  if (mouseIsPressed && timer > 0 && mouseX > firecracker2.position.x - 40 && mouseX < firecracker2.position.x + 40 && mouseY > firecracker2.position.y - 40 && mouseY < firecracker2.position.y + 40) {
    firecracker2.visible = false;
    firecracker2fixed = true;
  }
    
  if (mouseIsPressed && timer > 0 && mouseX > campfire.position.x - 45 && mouseX < campfire.position.x + 45 && mouseY > campfire.position.y - 40 && mouseY < campfire.position.y + 40) {
    campfire.visible = false;
    putoutfire.visible = true;
    campfixed = true;
  }

  if (timer <= 0 && (campfixed == false || firecracker1fixed == false || firecracker2fixed == false || cableFixed == false)) {
    state = 'failgameover';
  }

  if (campfixed == true && firecracker1fixed == true && firecracker2fixed == true && cableFixed == true) {
    state = 'successgameover';
  }
  
}

function displayFailForestMode() {
  background(forestbuttonImg);
  fill(255);
  textSize(24);
  textFont('Impact');
  textAlign(CENTER);
  text("You Lost! Make sure to put out the campfire,\nfix the cable, and get rid of the\nfirecrackers", 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 15, height * 3 / 4 , 100, 40);
  fill(255);
  textSize(20);
  text('Go to the Levels', (width / 2) + 30, (height * 3 / 4) + 10);

  if (mouseIsPressed && 
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height * 3 / 4 - 20 && mouseY < height * 3 / 4 + 20) {
    forestreset();
  }
}

function displaySuccessForestMode() {
  background(forestbuttonImg);
  fill(255);
  textSize(24);
  textFont('Impact');
  textAlign(CENTER);
  text("Congrats, You Won!", 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 70, height * 3 / 4 - 10, 150, 40);
  fill(255);
  textSize(20);
  text('Go to the Levels', width / 2, (height * 3 / 4) + 10);
  
  if (mouseIsPressed && 
      mouseX > width / 2 - 60 && mouseX < width / 2 + 60 &&
      mouseY > height * 3 / 4 - 30 && mouseY < height * 3 / 4 + 30) {
    forestreset();
    
  }
}

function forestreset() {
  state = 'info';
  timer = 60;
  startTime = millis();
  brokencable.visible = false;
  fixedcable.visible = false;
  campfire.visible = false;
  putoutfire.visible = false;
  firecracker1.visible = false;
  firecracker2.visible = false;

  cableFixed = false;
  firecracker1fixed = false;
  firecracker2fixed = false;
  campfixed = false;
  displayForestMode();
}

function displayOceanMode() {
  background(oceanbuttonImg);
  showStraw1 = true;
  showStraw2 = true;
  showPlasticBag1 = true;
  showPlasticBag2 = true;
  showBottle1 = true;
  showBottle2 = true;
  showSixpack1 = true;
  showSixpack2 = true;

  trash.visible = true;
  disappear();

  // Move objects if they are being dragged
  if (straw1.isDragging) {
    straw1.x = mouseX - straw1.width / 2;
    straw1.y = mouseY - straw1.height / 2;
  }
  if (straw2.isDragging) {
    straw2.x = mouseX - straw2.width / 2;
    straw2.y = mouseY - straw2.height / 2;
  }
  if (plasticBag1.isDragging) {
    plasticBag1.x = mouseX - plasticBag1.width / 2;
    plasticBag1.y = mouseY - plasticBag1.height / 2;
  }
  if (plasticBag2.isDragging) {
    plasticBag2.x = mouseX - plasticBag2.width / 2;
    plasticBag2.y = mouseY - plasticBag2.height / 2;
  }
  if (bottle1.isDragging) {
    bottle1.x = mouseX - bottle1.width / 2;
    bottle1.y = mouseY - bottle1.height / 2;
  }
  if (bottle2.isDragging) {
    bottle2.x = mouseX - bottle2.width / 2;
    bottle2.y = mouseY - bottle2.height / 2;
  }
  if (sixpack1.isDragging) {
    sixpack1.x = mouseX - sixpack1.width / 2;
    sixpack1.y = mouseY - sixpack1.height / 2;
  }
  if (sixpack2.isDragging) {
    sixpack2.x = mouseX - sixpack2.width / 2;
    sixpack2.y = mouseY - sixpack2.height / 2;
  }

  // Display all trash items
  if (showStraw1) {
    image(strawImg, straw1.x, straw1.y, straw1.width, straw1.height);
  }
  if (showStraw2) {
    image(strawImg, straw2.x, straw2.y, straw2.width, straw2.height);
  }
  if (showPlasicBag1) {
    image(plasticbagImg, plasticBag1.x, plasticBag1.y, plasticBag1.width, plasticBag1.height); 
  }
  if (showPlasicBag2) {
    image(plasticbagImg, plasticBag2.x, plasticBag2.y, plasticBag2.width, plasticBag2.height); 
  }
  if (showBottle1) {
    image(bottleImg, bottle1.x, bottle1.y, bottle1.width, bottle1.height);
  }
  if (showBottle2) {
    image(bottleImg, bottle2.x, bottle2.y, bottle2.width, bottle2.height);
  }
  if (showSixpack1) {
    image(sixpackImg, sixpack1.x, sixpack1.y, sixpack1.width, sixpack1.height);
  }
  if (showSixpack2) {
    image(sixpackImg, sixpack2.x, sixpack2.y, sixpack2.width, sixpack2.height);
  }

  book.visible = false;
  drawSprites();

  if (!(showStraw1 || showStraw2 || showPlasicBag1 || showPlasicBag2 || showBottle1 || showBottle2 || showSixpack1 || showSixpack2)) {
    state = 'oceansuccess';
  }
}

function mousePressed() {
  // Check if the mouse is over straw1
  if (mouseX > straw1.x && mouseX < straw1.x + straw1.width &&
      mouseY > straw1.y && mouseY < straw1.y + straw1.height) {
    straw1.isDragging = true;
  }

  // Check if the mouse is over straw2
  if (mouseX > straw2.x && mouseX < straw2.x + straw2.width &&
      mouseY > straw2.y && mouseY < straw2.y + straw2.height) {
    straw2.isDragging = true;
  }

  // Check for plasticBag1
  if (mouseX > plasticBag1.x && mouseX < plasticBag1.x + plasticBag1.width &&
      mouseY > plasticBag1.y && mouseY < plasticBag1.y + plasticBag1.height) {
    plasticBag1.isDragging = true;
  }

  // Check for plasticBag2
  if (mouseX > plasticBag2.x && mouseX < plasticBag2.x + plasticBag2.width &&
      mouseY > plasticBag2.y && mouseY < plasticBag2.y + plasticBag2.height) {
    plasticBag2.isDragging = true;
  }

  // Check for bottle1
  if (mouseX > bottle1.x && mouseX < bottle1.x + bottle1.width &&
      mouseY > bottle1.y && mouseY < bottle1.y + bottle1.height) {
    bottle1.isDragging = true;
  }

  // Check for bottle2
  if (mouseX > bottle2.x && mouseX < bottle2.x + bottle2.width &&
      mouseY > bottle2.y && mouseY < bottle2.y + bottle2.height) {
    bottle2.isDragging = true;
  }

  // Check for sixpack1
  if (mouseX > sixpack1.x && mouseX < sixpack1.x + sixpack1.width &&
      mouseY > sixpack1.y && mouseY < sixpack1.y + sixpack1.height) {
    sixpack1.isDragging = true;
  }

  // Check for sixpack2
  if (mouseX > sixpack2.x && mouseX < sixpack2.x + sixpack2.width &&
      mouseY > sixpack2.y && mouseY < sixpack2.y + sixpack2.height) {
    sixpack2.isDragging = true;
  }
}

function mouseReleased() {

  straw1.isDragging = false;
  straw2.isDragging = false;
  plasticBag1.isDragging = false;
  plasticBag2.isDragging = false;
  bottle1.isDragging = false;
  bottle2.isDragging = false;
  sixpack1.isDragging = false;
  sixpack2.isDragging = false;
}


function disappear() {
  function isOverlapping(trashItem) {
    const centerX = trashItem.x + trashItem.width / 2;
    const centerY = trashItem.y + trashItem.height / 2;
    return (
      centerX >= trash.x && centerY >= trash.y &&
      centerX <= trash.x + trash.width &&
      centerY <= trash.y + trash.height
    );
  }

  if (isOverlapping(straw1)) {
    showStraw1 = false;
  }
  if (isOverlapping(straw2)) {
    showStraw2 = false;
  }
  if (isOverlapping(plasticBag1)) {
    showPlasicBag1 = false;
  }
  if (isOverlapping(plasticBag2)) {
    showPlasicBag2 = false;
  }
  if (isOverlapping(bottle1)) {
    showBottle1 = false;
  }
  if (isOverlapping(bottle2)) {
    showBottle2 = false;
  }
  if (isOverlapping(sixpack1)) {
    showSixpack1 = false;
  }
  if (isOverlapping(sixpack2)) {
    showSixpack2 = false;
  }
}

function displayOceanSuccessMode() {
  trash.visible = false;
  background(oceanbuttonImg);
  fill(255);
  textSize(24);
  textFont('Impact');
  textAlign(CENTER);
  text("Congrats, You Won!", 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 70, height * 3 / 4 - 10, 150, 40);
  fill(255);
  textSize(20);
  text('Go to the Levels', width / 2, (height * 3 / 4) + 10);

  if (mouseIsPressed && 
      mouseX > width / 2 - 60 && mouseX < width / 2 + 60 &&
      mouseY > height * 3 / 4 - 30 && mouseY < height * 3 / 4 + 30) {
    oceanreset();
  }
}

function oceanreset() {
  state = 'info';
  showStraw1 = true;
  showStraw2 = true;
  showPlasticBag1 = true;
  showPlasticBag2 = true;
  showBottle1 = true;
  showBottle2 = true;
  showSixpack1 = true;
  showSixpack2 = true;

  trash.visible = true;
}

function displayCityMode() {
  background(citybuttonImg);
  book.visible = false;
  drawSprites();

  if (!car1fixed) {
    car1.visible = true;
    fixedcar1.visible = false;
  }
  if (!car2fixed) {
    car2.visible = true;
    fixedcar2.visible = false;
  }

  if (mouseIsPressed && mouseX > car1.position.x - 85 && mouseX < car1.position.x + 85 && mouseY > car1.position.y - 65 && mouseY < car1.position.y + 65) {
    car1.visible = false;
    fixedcar1.visible = true;
    car1fixed = true;
  }

  if (mouseIsPressed && mouseX > car2.position.x - 110 && mouseX < car2.position.x + 110 && mouseY > car2.position.y - 85 && mouseY < car2.position.y + 85) {
    car2.visible = false;
    fixedcar2.visible = true;
    car2fixed = true;
  }

  if (car1fixed == true && car2fixed == true) {
    state = 'citysuccess';
  }
}

function displaySuccessCityMode() {
  background(citybuttonImg);
  fill(255);
  textSize(24);
  textFont('Impact');
  textAlign(CENTER);
  text("Congrats, You Won!", 400, 200);

  fill(112, 67, 52);
  stroke("black");
  strokeWeight(1);
  rect(width / 2 - 70, height * 3 / 4 - 10, 150, 40);
  fill(255);
  textSize(20);
  text('Go to the Levels', width / 2, (height * 3 / 4) + 10);

  fixedcar1.visible = false;
  fixedcar2.visible = false;
  car1.visible = false;
  car2.visible = false;
  
  if (mouseIsPressed && 
      mouseX > width / 2 - 60 && mouseX < width / 2 + 60 &&
      mouseY > height * 3 / 4 - 30 && mouseY < height * 3 / 4 + 30) {
    cityreset();

  }
}

function cityreset() {
  state = 'info';
  car1.visible = true;
  car2.visible = true;
  fixedcar1.visible = false;
  fixedcar2.visible = false;
  firecracker1.visible = false;
  firecracker2.visible = false;

  car1fixed = false;
  car2fixed = false;
  displayCityMode();
}
