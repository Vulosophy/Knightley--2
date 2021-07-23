class gold{

    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 15, 15, options);
        this.image = loadImage('coin.png')
        this.width = 15;
        this.height = 15;
        World.add(world, this.body);
    }
    display(){
      
        push();
        imageMode(CENTER);
        fill('yellow');
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
        pop();
        }

    





}