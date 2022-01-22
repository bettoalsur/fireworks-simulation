class foguete {
  constructor () {
    this.pos = createVector(random(10,width),height-10);
    this.vel = createVector(0,random(-20,-14));
    this.acel = createVector(0,0);
    this.chispas = [];
    this.ver = true;
    this.exist = true;
    this.hu = random()*255;
  }
  
  
  update(dt) {
    
    this.vel.add(this.acel.mult(dt));
    this.pos.add(this.vel.mult(dt));
    this.acel.mult(0);
    
    // cria as chispas e oculta o foguete, se chegar no ponto maximo
    if ( this.ver && this.vel.y >= 0 )
      {
        this.ver = false;
        
        for (let i = 0 ; i < 100 ; i++ )
              {
                this.chispas.push(new chispa( this.pos.x , this.pos.y , this.hu ));
              }
        // crack.play();
      }
    
    // gerencia as chispas, se existirem
    if (this.chispas.length > 0)
      {
        for (let chispa of this.chispas)
          {
            let gravity = createVector(0,0.05)
            chispa.addForce(gravity);
            chispa.update(dt);
            chispa.show();
          }
        
        for (let i = this.chispas.length - 1 ; i >= 0 ; i--)
          {
            if (this.chispas[i].lifetime <= 0)
              {
                this.chispas.splice(i,1);
              }
          }
      }
         
    // exclui os foguetes 
    if ( !this.ver && this.chispas.length == 0 )
      {
        this.exist = false;
      }
       
    
  }
  
    
  addForce (force) {
    this.acel.add(force);
  }
  
  
  show () {
    if (this.ver)
      { 
        colorMode(HSB);
        stroke(this.hu , 255 , 255 );
        strokeWeight(7);
        //colorMode(RGB);
        point(this.pos.x,this.pos.y);
      }
    
  }
  
  
  
}