var p1;

 function preload() {
    boxImg = loadImage("images/bg.png");
   

 }
function setup(){
    createCanvas(500,500);
   
    p1 = createSprite(25,20,20,20);
    p1.shapeColor = "black";

  
    //1//
    box = createSprite(70,60,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box2 = createSprite(150,60,35,35);
    box2.addImage(boxImg);
    box2.scale=0.2;

    box3 = createSprite(235,60,35,35);
    box3.addImage(boxImg);
    box3.scale=0.2;

    box4 = createSprite(320,60,35,35);
    box4.addImage(boxImg);
    box4.scale=0.2;

    box5 = createSprite(410,60,35,35);
    box5.addImage(boxImg);
    box5.scale=0.2;
    //2//
    box6 = createSprite(70,150,35,35);
    box6.addImage(boxImg);
    box6.scale=0.2;

    box7 = createSprite(150,150,35,35);
    box7.addImage(boxImg);
    box7.scale=0.2;

    box8 = createSprite(235,150,35,35);
    box8.addImage(boxImg);
    box8.scale=0.2;

    box9= createSprite(320,150,35,35);
    box9.addImage(boxImg);
    box9.scale=0.2;

    box10 = createSprite(410,150,35,35);
    box10.addImage(boxImg);
    box10.scale=0.2;

    //3//
    box11 = createSprite(70,240,35,35);
    box11.addImage(boxImg);
    box11.scale=0.2;

    box12 = createSprite(150,240,35,35);
    box12.addImage(boxImg);
    box12.scale=0.2;

    box13 = createSprite(235,240,35,35);
    box13.addImage(boxImg);
    box13.scale=0.2;

    box14 = createSprite(320,240,35,35);
    box14.addImage(boxImg);
    box14.scale=0.2;

    box15 = createSprite(410,240,35,35);
    box15.addImage(boxImg);
    box15.scale=0.2;

    //4//
    box16 = createSprite(70,330,35,35);
    box16.addImage(boxImg);
    box16.scale=0.2;

    box17 = createSprite(150,330,35,35);
    box17.addImage(boxImg);
    box.scale=0.2;

    box3 = createSprite(235,330,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box4 = createSprite(320,330,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box5 = createSprite(410,330,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    //5//
    box1 = createSprite(70,420,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box2 = createSprite(150,420,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box3 = createSprite(235,420,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box4 = createSprite(320,420,35,35);
    box.addImage(boxImg);
    box.scale=0.2;

    box5 = createSprite(410,420,35,35);
    box.addImage(boxImg);
    box.scale=0.2;
}




function draw(){
    background("green");
    if(keyDown(LEFT_ARROW)){
        changePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+4);
    }
    


    drawSprites();
}

function changePosition(x,y){
    p1.x = p1.x + x;
    p1.y = p1.y + y;

}
