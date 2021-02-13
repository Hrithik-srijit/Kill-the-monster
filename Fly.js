class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.superHero = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
     this.superHero.bodyA=null;   
    }
    display(){
        if(this.superHero.bodyA){

        
        var pointA = this.superHero.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}