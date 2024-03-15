//declarando a variavel x
let  x  = 500;
//declarando a variavel y 
let  y = 400;
let tamhanhobolinha = 80;
let v = 5;

let raio = tamhanhobolinha / 2;

function setup() { 
   createCanvas(1000, 1000);
}

function draw() {
  background(0);
   
  circle(x, y, tamhanhobolinha,);
  
   x += v;
    
   if(x + raio > width || x - raio < 0 ) {

     v *= -1;
   }
   console.log(x)





  }
