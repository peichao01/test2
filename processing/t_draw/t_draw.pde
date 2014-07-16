float yPos = 0;

void setup(){
 size(200, 200);
 frameRate(30);
}

void draw(){
  background(204);
  yPos = yPos - 1.0;
  if(yPos < 0){
    yPos = height;
  }
  line(0, yPos, width, yPos);
}

void mousePressed(){
  line(mouseX, 10, mouseX, 90);
}
