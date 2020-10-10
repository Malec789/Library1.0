var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(200, 200, 80, 50);
  movingRect.shapeColor = "white";
  movingRect.velocityX = 4;

  fixedRect = createSprite(800, 200, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.velocityX = -4;

  gameObject1 = createSprite(300, 400, 50, 80)
  gameObject1.shapeColor = "white";

  gameObject2 = createSprite(300, 500, 50, 80)
  gameObject2.shapeColor = "white";

}

function draw() {
  background(0, 0, 0);  

  gameObject1.y = mouseY;
  gameObject1.x = mouseX;

  isTouching(gameObject1, gameObject2);
  bounceOff(movingRect, fixedRect);


  drawSprites();
}


