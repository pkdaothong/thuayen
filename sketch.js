var circle1x=102;
var circle1dir=-1;
 
function setup() {
  createCanvas(500, 1000);
}
  
function draw() {
   
  //background
  background(35,61,77);
   circle(circle1x,100,147/2);
   circle(329, 223, 58/2);
   circle(449, 334, 31/2);
   circle(328, 420, 88/2);
   circle(261, 321, 31/2);
   circle(160, 432, 53/2);
  strokeWeight(15);
   stroke(255,222,23)
   fill(35, 61, 77)
    
    
    
  //line1 num top to bottom
  strokeCap(SQUARE);
  line(396,30, 462,49)
  line(392,68,401,114)
  line(306,135,370,143)
  line(270,132,285,177)
  line(211,210,265,215)
  line(185,231,188,275)
  line(108,297,162,305)
  line(88,322,87,367)
  line(35,382,83,400)
  line(27,410,30,469)
   
   
   circle1x=circle1x+circle1dir;
 
  if (circle1x+147/2+15<0 || circle1x>102){
 circle1dir=-circle1dir;
}
   
 
   
  
    
}