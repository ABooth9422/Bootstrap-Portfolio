$(document).ready(function(){
   load();
   mainScreen();
   portfolio();
   contact();
    
})

function load(){
    $("#portfolio").hide();
    $("#contact").hide();
}
function mainScreen(){
    $("#mainLink").on("click",function(){
        $("#portfolio").hide();
        $("#contact").hide();
        $("#mainPage").show();
    })
    }
    function portfolio(){
        $("#portLink").on("click",function(){
            $("#portfolio").show()
            $("#mainPage").hide();
            $("#contact").hide();
        })
        }
function contact(){
    $("#contactLink").on("click",function(){
    $("#contact").show();
    $("#portfolio").hide();
    $("#mainPage").hide();
})
}
