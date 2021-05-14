class Ball{
    constructor(x, y , radius){
        var options = {
            isStatic: false,
            restitution:0.1,
            friction:1.8,
            density:7
        
        }
        
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);

    }

    display(){
    fill("yellow");
    ellipseMode(RADIUS);
    circle(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}