var currentScene = 0;
var difficulty = 1;
var secret = 0;
var jump = 1;
var y = 150;
var Xpos = [];
var Ypos = [];
var Top = [];
var score = 0;
for (var j = 0; j < 10; j++){
    Xpos.push(j*200+500);
    Ypos.push(random(150,300));
    Top.push(Ypos[j] - 400);
}
//Ryan's Bitmoji
var drawBitmojiHead = function(x,y,bitSize) {  
    //hed
    fill(255, 238, 163);
    ellipse(x,y,(bitSize/100*80),(bitSize/100*120));
    //eyes
    fill(255, 255, 255);
    ellipse(x-(bitSize/100*15),y-(bitSize/100*20),(bitSize/100*15),(bitSize/100*15));
    ellipse(x+(bitSize/100*15),y-(bitSize/100*20),(bitSize/100*15),(bitSize/100*15));
    fill(122, 93, 15);
    ellipse(x-(bitSize/100*15),y-(bitSize/100*20),(bitSize/100*5),(bitSize/100*5));
    ellipse(x+(bitSize/100*15),y-(bitSize/100*20),(bitSize/100*5),(bitSize/100*5));
    //mouth
    fill(181, 0, 0);
    arc(x,y+(bitSize/100*25),(bitSize/100*30),(bitSize/100*15),0,180);
    //hair
    fill(59, 30, 0);
    quad(x+(bitSize/100*12),y-(bitSize/100*61),x-(bitSize/100*10),y-(bitSize/100*61),x-(bitSize/100*48),y-(bitSize/100*27),x+(bitSize/100*51),y-(bitSize/100*27));
    //nose
    fill(255, 199, 69);
    triangle(x-(bitSize/100*10),y+(bitSize/100*10),x+(bitSize/100*10),y+(bitSize/100*10),x,y);
};

var drawBitmojiBody = function(x,y,bitSize) { 
    //shurt
    fill(92, 92, 92);
    quad(x+(bitSize/100*45),y+(bitSize/100*100),x-(bitSize/100*43),y+(bitSize/100*100),x-(bitSize/100*30),y+(bitSize/100*60),x+(bitSize/100*34),y+(bitSize/100*61));
    fill(255, 255, 255);
    textSize((bitSize/100*20));
    text("RC", x-(bitSize/100*15),y+(bitSize/100*70));
};
var drawBitMoji = function(x,y,bitSize) { 
drawBitmojiHead(x,y,bitSize);
drawBitmojiBody(x,y,bitSize);
};
//Lucas' Bitmoji
var drawHead = function(X,Y){

      noStroke();
      fill(175, 110, 81);//skintone
      ellipse(X,Y,80,100); //head
      fill(204, 22, 71);
      arc(X-43,Y+40,36,57,0,415); //left chisel
      arc(X+44,Y+40,36,57,0,415); //right chiesel
};

var drawHair= function(X,Y){

      fill(33, 20, 20);//fill top hair
      arc(X, Y-35, 54, 29, -181, 180);
      quad(X-28,Y-38,X-39,Y-13,X+21,Y+-13,X+2,Y-41);//left hair
      quad(X+40,Y-12,X+27,Y-39,X-25,Y-14,X-26,Y-16);//right hair
      fill(48, 34, 34);//brown eyes fill 
}; 

var drawEye = function(X,Y){

      ellipse(X-15,Y+2,6,7);//left eye 
      ellipse(X+18,Y+2,6,7);//right eye
      stroke(0, 0, 0);
      fill(175, 110, 81);//fill nose
      bezier(X+2,Y+4,X+17,Y+24,X-8,Y+23,X-3,Y+13); //nose
};

var drawMouth= function(X,Y){ 

    fill(255, 255, 255); //fill teeth
    arc(X+3,Y+28,30,11,1,180);//mouth
    line(X-12,Y+28,X+18,Y+28); //top of mouth
    ellipse(X+37,Y+12,5,6);//right earing
    ellipse(X-36,Y+12,5,6);//left earing 

}; 

var drawBitmoji= function(X,Y){

    drawHead(X,Y);
    drawHair(X,Y);
    drawEye(X,Y); 
    drawMouth(X,Y);
};
        //The button
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
var startButton = new Button({
    x: 150,
    y: 300,
    width: 115,
    label: "Start Game ",
    onClick: function() {
    currentScene = 1;
}});
var btn1 = new Button({
    x: 50,
    y: 100,
    width:68,
    label: "Easy",
    onClick: function() {
        difficulty = 1;
    }
});
var btn2 = new Button({
    x: 300,
    y: 100,
    width: 68,
    label: "Hard",
    onClick: function() {
        difficulty = 2;
    }
});
var btn3 = new Button({
    x: 145,
    y: 200,
    width: 120,
    label: "How to play",
    onClick: function() {
        currentScene = 3;
    }
});
var goBack = new Button({
    x: 150,
    y: 300,
    width: 100,
    label: "go back",
    onClick: function() {
        currentScene = 0;
    }
});
var unfairBtn = new Button({
    x: 130,
    y: 100,
    width: 150,
    label: "Unfair Mode",
    onClick: function(){
        difficulty = 3;
    }
});
var splash = function(){
    textAlign(CENTER,CENTER);
    background(204, 22, 71);
    textSize(24);
    fill(255, 255, 255);
    text("Select a Level:",200,50);
    textSize(15);
    fill(255, 255, 255);
    noStroke();
    startButton.draw();
    btn1.draw();
    btn2.draw();
    btn3.draw();
    drawBitmoji(80,300);
    drawBitMoji(331,300,80);
    if (secret === 1) {
        unfairBtn.draw();
    }
};
var HelpScreen = function(){
    background(204,22,71);
    fill(255, 255, 255);
    textSize(30);
    text("How to play",115,20);
    textSize(20);
    text("Click on either the 'easy' button or the 'hard' button to select a difficulty. After selecting a difficulty click on the start button to begin. After starting click on the screen to keep <object_name_here> off the ground and between the <obstacle_name>s. You get a point every time <object_name_here> goes through the <obstacle_name>s without dying.",30,50,350,350);
    goBack.draw();
};
mouseClicked = function() {
    if (currentScene === 0) {
    startButton.handleMouseClick();
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    btn3.handleMouseClick();
    }
    if (currentScene === 3) {
    goBack.handleMouseClick();
    }
    if (currentScene === 0 && secret === 1) {
    unfairBtn.handleMouseClick();
    }
    if (mouseX > 380 && mouseY < 20){
        secret = 1;
    }
    if (currentScene === 1) {
        jump = 0;
        jump -= 1;
    }
};
draw = function() {
    if (currentScene === 0) {
        splash();
    }
    if (currentScene === 3) {
        HelpScreen();
    }
    if (currentScene === 1) {
         background(255, 255, 255);
    fill(0, 0, 0);
    var unga = constrain(y,-1000000000,350);
    rect(200,unga,50,50);
    y += jump;
    jump += 0.02;
    if (y >= 350) {
        jump = 0;
        currentScene = 2;
    }
    for (var i = 0; i < Xpos.length; ++i){
        fill(17, 128, 44);
        rect(Xpos[i]+5,Top[i],40,300);
        rect(Xpos[i]+5,Ypos[i],40,350);
        rect(Xpos[i],Ypos[i],50,25);
        rect(Xpos[i],Ypos[i]-125,50,25);
        Xpos[i] -= difficulty;
        if (Xpos[i] === 200) {
            score++;
        }
        if (Xpos[i] < -100) {
            Xpos[i] = 2000;
            Ypos[i] = random(150,300);
            Top[i] = Ypos[i] - 400;
        }
        if (Xpos[i] < 250 && Xpos[i] > 200) {
            if (Ypos[i] < unga || Top[i] + 300 > unga) {
            currentScene = 2;
            }
        }
    }
    }
    if (currentScene === 2) {
        background(255, 0, 0);
        fill(0, 0, 0);
        textSize(30);
        text("Game Over.",120,200);
        text("Score: " + score, 140,250);
    }
    };
