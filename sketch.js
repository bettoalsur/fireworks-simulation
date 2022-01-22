let foguetes = [];
let num_foguetes = 1;
let dt = 1;
let hu;

/*
let whistle;
let crack;
function preload() {
  soundFormats('w1  whistle = loadSound('whistle');
  crack = loadSound('crack');
}
*/

function setup() {
  createCanvas(600, 400);
  hu = random(0,255);
}

function draw() {
  
  push();
  colorMode(HSB);
  textSize(25);
  hu += random(5,10);
  if (hu >= 250 )
    { hu = 0 }
  stroke(hu, 255, 255);
  strokeWeight(3)
  fill(255);
  text('Feliz Natal e', 10, 35);
  text('Próspero 2022', 10, 65);
  pop();
  
  
  colorMode(RGB);
  background(0,25);
  
  textSize(10);
  noStroke();
  fill(255);
  text('b e t t o a l s u r', width - 80, height-10);
  
  
  if (random() < 0.05)
    {
      for (let i = 0 ; i < num_foguetes ; i++)
        {
          foguetes.push( new foguete() );
          // whistle.play();
        }
    }
  
  
  for (let foguete of foguetes)
    {
      let gravity = createVector(0,0.5)
      foguete.addForce(gravity);
      foguete.update(dt);
      foguete.show();
    }
  
  for (let i = foguetes.length - 1 ; i >= 0 ; i--)
    {
      if ( !foguetes[i].exist )
        {
          foguetes.splice(i,1);
        }
    }
  
  
  
  
  
  
}