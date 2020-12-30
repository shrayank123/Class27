class Chain
{
constructor(bodyA,bodyB)
{
    var options ={
        bodyA : bird.body,
        bodyB : clog.body,
        stiffness : 0.4,
        length : 10
   
       }
       
      this.chain = Constraint.create(options);
      //adding this.chain to world
      World.add(world,this.chain);
}
 display()
 {
    var pos1 = bird.body.position;
    var pos2 = clog.body.position;
    strokeWeight(4);
    
    line(pos1.x,pos1.y,pos2.x,pos2.y)
    
 }

}