var random_result;
var lost = 0;
var win = 0;
var previous = 0;


$(".crystal").attr('class', 'red');

var resetandStart = function(){

(".crystals").empty();

var images = [
    '',
    '',
    '',
    '',
]

random_result = Math.floor(Math.random() * 59 ) + 30();
//console.log(random_result);

$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){
   
    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);
    
    $(".crystals").empty();
    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    crystal.css({
        "background-image":"url"(images[i]) + "')"  
        //"background-size":cover;// 
    });

    $(".crystals").append(crystal);
    
}   

    $("#previous").html("Total score: " + previous);
}

resetAndStart();

//Event delegate

$(document).on('click', ".crystal", function(){
    var num = parseInt($(this).attr('data-random'));
    //console.log($(this));

    previous += num;

    $("#previous").html("Total score: " + previous);

    if(previous > random_result){
        lost++;

        $("#lost").html("You lost: " + lost);

        console.log(previous);

        previous = 0;

        $("#previous").html(previous);
        
        resetAndStart();
    }

    else if(previous === random_result){
        win++;

        $("#win").html("You win: " + win);

        $("#previous").html(previous);

        previous = 0;
        
        resetAndStart();


    });

// PSEUDO Coding

//four crystals and random result
//crystals need to have random number between 1-12
//a new number generated each time we win or lose
//to those 4 crstals
//upon clicking any crystal. it should be adding to previous result for total score
//if not equal start over
//if equal, increment a win counter
//setter
//getter





