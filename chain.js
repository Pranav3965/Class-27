class Chain {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.7,
            length: 50
        }
        this.j = Matter.Constraint.create(options)
        World.add(world, this.j)
    }
    display() {
        var pointA = this.j.bodyA.position;
        var pointB = this.j.bodyB.position;
        line(pointA.x,pointA.y, pointB.x,pointB.Y)
    }
}