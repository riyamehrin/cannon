class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImage=loadImage("./assets/cannonBase.png");
    this.image=loadImage("./assets/canon.png");
  }
  display(){
    push () ;
    imageMode (CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop();
    image(this.cannonImage,70,20,200,200);
    noFill();

  }
}
    