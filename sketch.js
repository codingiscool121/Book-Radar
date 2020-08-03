var form,bg;

function setup(){
    createCanvas(900,500);
    form = new Form();
    
    bg =loadImage("backdrop.png");
}

function draw(){
    background(bg);
    form.display();
   
  
}
   
  
  