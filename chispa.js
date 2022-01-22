class chispa {
  constructor (x0,y0,hu) {
    this.pos = createVector(x0,y0);
    this.vel = p5.Vector.random2D(); 
    this.vel.mult( random(4,8) );
    this.acel = createVector(0,0);
    this.lifetime = 255;
    this.hu = hu;
  }
  
  
  update(dt) {
    this.vel.add(this.acel.mult(dt));
    this.vel.mult(0.925);
    this.pos.add(this.vel.mult(dt));
    this.acel.mult(0);
    this.lifetime -= 3.5;
    
  }
  
  addForce (force) {
    this.acel.add(force);
  }
  
  
  show () {
    colorMode(HSB);
    stroke(this.hu , 255 , this.lifetime , this.lifetime );
    strokeWeight(3);
    point(this.pos.x,this.pos.y);
  }
  
  
  
}