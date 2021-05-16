class Slingshot{
    constructor  (bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.2,
            length : 20
        }
        this.pointB = pointB ;
         this.sling = Constraint.create(options)
         World.add(world, this.sling)
       
    }
    fly () {
      this.sling.bodyA = null
    }
    display () {
        if(this.sling.bodyA) {
            var pointA, pointB ;
            pointA = this.sling.bodyA.position
            pointB = this.pointB
            strokeWeight(4) ;
             line (pointA.x, pointA.y, pointB.x, pointB.y) 
        }


 
    }
}