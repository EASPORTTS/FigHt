var canvas, backgroundImage;

var amungusred,amungusredI
var clrearhenry
var hank
var impostor
var monsterhank

var neatsteve



function preload(){
 backgroundImage=loadImage("OIP.jpg")
  amungusredI=loadImage("amungusred.png")
 neatsteveI=loadImage("neatsteve.png")
 monsterhankI=loadImage("monsterhank.png")
 
 clrearhenrI=loadImage("clrearhenry.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-200);
  amungusred=createSprite(100,750,20,30)
  amungusred.addImage(amungusredI)
  monsterhank=createSprite(900,750,90,30)
  monsterhank.addImage(monsterhankI)
  monsterhank.scale=2
  neatsteve=createSprite(600,750,90,30)
  neatsteve.addImage(neatsteveI)
  
}


function draw(){
  background(backgroundImage)
  drawSprites()
   
  }

