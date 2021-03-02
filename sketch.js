function setup(){
  createCanvas(850,600);
  input=createInput().attribute("placeholder", "Enter your name ");
  input.position(350,230);
  SU=createButton("SUBMIT");
  SU.position(390,280);
  SU.mousePressed(game);
  Quize=createElement("h2");
  Quize.html("KNOW YOUR KNOWLEDGE !");
  Quize.position(250,100);
  }

  function draw(){
  background("blue");
  if(mousePressed(SU)){
    background("green");
  }
  if(mousePressed(submit)){
    background("red");
  }
}

  function game(){
  background("green");

  input.hide();
  Quize.hide();
  SU.hide();
  
  greet=createElement("h1");
  greet.html("Hello! "+input.value() );
  greet.position(380,10);
  
  greet1=createElement("h1");
  greet1.html("Let`s see if you can answer these ");
  greet1.position(275,50);

  Question=createElement("h1");
  Question.html("Questions ");
  Question.position(400,100);

  Question1=createElement("h2");
  Question1.html(" Q1) What's the biggest animal in the world? ");
  Question1.position(50,200);

  Question2=createElement("h2");
  Question2.html(" a) TIGER ");
  Question2.position(50,250);

  Question3=createElement("h2");
  Question3.html(" b) LION ");
  Question3.position(50,300);

  Question4=createElement("h2");
  Question4.html(" c) GIRAFFE ");
  Question4.position(50,350);

  Question5=createElement("h2");
  Question5.html(" d) BLUE WALE ");
  Question5.position(50,400);

  submit=createButton("SUBMIT");
  submit.position(100,550);
  submit.mousePressed(game2);

  output=createInput().attribute("placeholder", "Enter the correct option");
  output.position(400,550);

  

  }
  function game2(){
  greet.hide();
  greet1.hide();
  Question.hide();
  Question1.hide();
  Question2.hide();
  Question3.hide();
  Question4.hide();
  Question5.hide();
  submit.hide();
  
  output.hide();
  output1=createElement("h1");
  output1.html(" YOUR ANSWERS ");
  output1.position(300,100);

  output2=createElement("h1");
  output2.html(" Q1) "+output.value());
  output2.position(350,150);

  output3=createElement( "h1");
  output3.html(" CORRECT ANSWERS ");
  output3.position(300,300);

  output4=createElement("h1");
  output4.html(" BLUE WALE ");
  output4.position(350,350);

  output5=createElement("h1");
  output5.html(" THANK YOU FOR ATTENDING OUR QUIZ !");
  output5.position(100,500);
  }