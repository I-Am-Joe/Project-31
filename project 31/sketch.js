var particles=[];
var plinkos=[];
var division=[];

var divisonHeight=300;
var ground

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,800,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
for (var j = 40;j <=width;j=j+50){
  plinkos.push(new Plinkos(j,75));
}
for (var j = 15;j <=width-10;j=j+50){
  plinkos.push(new Plinkos(j,175));
}
if(frameCount%60===0){
  particles.push(new Particales(random(width/2-10,width/2+10),10,10));
}

for (var j = 0;j<particles.length;j++){
  
  particles[j].display();
}
for (var k = 0;k<division.length;k++){
  
  division[k].display();
}


  for(var k = 0; k<=width;k=k+ 80){
    division.push(new Division(k, height-divisonHeight/2,10,divisionHeight));
  }
}