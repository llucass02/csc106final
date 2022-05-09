var currentscene = 0;
var difficulty = 1;
var secret = 0;
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
}; // creates a var called Button 
Button.prototype.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height, 12);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/5);
}; // Prototype for draw button 
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
}; // Prototype is mouseInside
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
}; // Prototype handlemouse 
var startButton = new Button({
    
    x: 150,
    y: 311,
    width:115,
    label: "Start Game ",
    onClick: function() {
    currentscene = 1;

    }
}); // creates the start button 
var btn1 = new Button({
    x: 50,
    y: 100,
    width:68,
    label: "Easy",
    onClick: function() {
    currentscene = 1;
    }
});
var btn2 = new Button({
    x: 300,
    y: 100,
    width:68,
    label: "Hard",
    onClick: function() {
        currentscene = 2;
    }
});
var btn3 = new Button({
    x: 145,
    y: 200,
    width: 120,
    label: "How to play",
    onClick: function() {
        currentscene = 3;
    }
});
var goBack = new Button({
    x: 150,
    y: 300,
    width: 100,
    label: "go back",
    onClick: function() {
        currentscene = 0;
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
mouseClicked = function() { 
    startButton.handleMouseClick();
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    btn3.handleMouseClick();
    goBack.handleMouseClick();
    unfairBtn.handleMouseClick();
    if (mouseX > 380 && mouseY < 20){
        secret = 1;
    }
}; // handles mouse click 

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
    if (secret === 1) {
        unfairBtn.draw();
    }
}; // start screen setup  

var HelpScreen = function(){
    background(204,22,71);
    fill(255, 255, 255);
    textSize(30);
    text("How to play",115,20);
    textSize(20);
    text("Click on either the 'easy' button or the 'hard' button to select a difficulty. After selecting a difficulty click on the start button to begin. After starting click on the screen to keep <object_name_here> off the ground and between the <obstacle_name>s. You get a point every time <object_name_here> goes through the <obstacle_name>s without dying.",30,50,350,350);
    goBack.draw();
};
draw = function(){
    if(currentscene === 0){splash();} // start screen 
    if(currentscene === 3){HelpScreen();}
    
    

    };
