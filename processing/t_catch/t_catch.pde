BufferedReader reader;
String line;

void setup(){
  reader = createReader("positions.txt");
}

void draw(){
  try{
    line = reader.readLine();
  }catch(IOException e){
    e.printStackTrace();
    line = null;
  }
  if(line == null){
    noLoop();
  }else{
    String[] pieces = split(line, TAB);
    int x = int(pieces[0]);
    int y = int(pieces[1]);
    point(x, y);
  }
}
