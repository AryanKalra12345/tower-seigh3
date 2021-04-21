const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var bg1,backgroundImg,bg2;
var bg="bg2.jpg"
 
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground,slingshot;
var stand1,stand2;
function preload(){
    getTime();
    bg=loadImage("bg2.jpg")
}
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(300,275,30,40);
    box2= new Box(330,275,30,40);
    box3= new Box(360,275,30,40);
    box4= new Box(390,275,30,40);
    box5= new Box(420,275,30,40)
    box6= new Box(450,275,30,40);
    box7= new Box(480,275,30,40);
    box8= new Box(330,235,30,40);
    box9= new Box(360,235,30,40);
    box10= new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40)
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15= new Box(420,196,30,40);
    box16= new Box(390,155,30,40);
    box17= new Box(640,175,30,40);
    box18= new Box(670,175,30,40);
    box19= new Box(700,175,30,40);
    box20= new Box(730,175,30,40);
    box21= new Box(760,175,30,40);
    box22= new Box(670,135,30,40);
    box23= new Box(700,135,30,40);
    box24= new Box(730,135,30,40);
    box25= new Box(700,95,30,20)
    stand1= new Stand(390,300,250,10);
    stand2= new Stand(700,200,200,10);

    ground= new Ground(600,380,1200,10)

    ball= Bodies.circle(50,200,20)
    World.add(world,ball)

    slingshot= new Slingshot(this.ball,{x:100,y:200});
   
}

function draw(){
    background(bg)
    Engine.update(engine);

    stand1.display();
    stand2.display();

    ground.display();
    slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
     box25.display();
     
   ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20);
       
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();

}
async function getTime(){
    var response  = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    var responceaz = await response.json()
    //console.log(responceaz)
    var responseaq = responceaz.datetime
    //console.log(responseaq)
    var responceq = responseaq.slice(11,19)
    //console.log(responceq)
    if(responceq>=06&&responceq<=19){
        bg = "bg2.jpg"
    }else{
        bg = "bg1.png"
    }
    backgroundImg = loadImage(bg);
}
