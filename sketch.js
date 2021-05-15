var starImg,bgImg;
var bg
var star, starBody;
var fairy, fairyAn;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyAn = loadAnimation("fairyImage1.png", "fairyImage2.png");

}

function setup() {
	createCanvas(800, 750);

	bg = createSprite(200,200);
	bg.addImage(bgImg)

	fairy = createSprite(130,520);
	fairy.addAnimation("fairyAnimation",fairyAn);
	fairy.scale = 0.2


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(0);

  star.x= starBody.position.x 
  star.y= starBody.position.y

  console.log(star.y);
  console.log("starBody",starBody.y);

  if(star.y > 470) {
	Matter.Body.setStatic(starBody,true);
}

  drawSprites();


}

function keyPressed() {

	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x+20
	}
	
	if(keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-20
	}
	
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
}
