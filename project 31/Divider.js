class Division{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
};