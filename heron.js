/*
OHHH YEAHHHHHH JAVASCRIPT!
This is honestly possibly my favorite language as I can do crap like this.
I can also make stuff like TomBot and Saori-Chan with it (node things for discord).
Ohhh yeaaahhhhhhh baby!
*/


$(document).mousemove(function(e){
    $("#heron").css({left:e.pageX-50, top:e.pageY-50});
});

var screenWidth = ($(document).width() - 300);
var screenHeight = ($(document).height() - 300);

$(function(){
    $(".pan").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*screenWidth)+"px",
                top:(Math.random()*screenHeight)+"px",
            });
        }
    });
});
