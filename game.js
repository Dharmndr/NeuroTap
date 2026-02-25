var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

function nextSequence(){
    
    userClickedPattern=[];  

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // step 3
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    // step 7
    level++;
    $("#level-title").text("Level "+ level);
}
// step 4
$(".btn").click(function (){
    
    var userChosenColour=$(this).attr("id");  

    userClickedPattern.push(userChosenColour);  
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

})
// step 5
function playSound(name){
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}

// step 6
 function animatePress(currentColor){

$("#"+ currentColor).addClass("pressed");

setTimeout( function(){
    $("#"+ currentColor).removeClass("pressed");
},100);
}

// step 7

var level=0; 
var start=false;
$(document).keypress(function(){  
if(!start){

    $("#level-title").text("Level "+ level);
    nextSequence();
    start=true;
}
 
});

// Step 8
 

function checkAnswer(currentLevel){
    
   if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    // console.log("success");

    if(gamePattern.length===userClickedPattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
    
   }
   else{
    // console.log("wrong");  

    playSound("wrong");

    $("body").addClass("game-over"); 

    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

   startOver();  

   }
}

// Step 10

function startOver(){

    level=0; 
    start=false;
    gamePattern=[];
}
 








