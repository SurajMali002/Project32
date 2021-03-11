class Rope{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 7
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }

    throw(){
        this.rope.bodyA = null;
    }

    

    attach(body){
        this.rope.bodyA = body;
    }

    display(){

        if(this.rope.bodyA){

            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop();
        }
    }

}