const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var superHero;
var ground;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  hero
}

function draw() {
  background(0);
superHero.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mousex,y:mousey});
}
