class ComputerArcher{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        
        this.body=Matter.Bodies.rectangle(x,y,width,height,option)
        this.image=loadImage("assets/computerArcher.png")
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        Matter.Body.setAngle(this.body,90);

    }
     display(){
         var angle=this.body.angle
        if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
          }
      
          if (keyIsDown(UP_ARROW) && angle > -1.9) {
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle);
          }
    
         push()
         translate(this.body.position.x,this.body.position.y)
         imageMode(CENTER)
         image(this.image,0,0,this.width,this.height)
         pop()
     }


}
