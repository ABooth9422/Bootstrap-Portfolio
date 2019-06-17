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
        $("#mainLink").addClass("active")
        $("#portLink").removeClass("active")
        $("#contactLink").removeClass("active")
        $("#portfolio").hide();
        $("#contact").hide();
        $("#mainPage").show();
    })
    }
    function portfolio(){
        $("#portLink").on("click",function(){
            $("#portLink").addClass("active")
            $("#contactLink").removeClass("active")
            $("#mainLink").removeClass("active")
            $("#portfolio").show()
            $("#mainPage").hide();
            $("#contact").hide();
        })
        }
function contact(){
    $("#contactLink").on("click",function(){
    $("#contactLink").addClass("active")
    $("#mainLink").removeClass("active")
    $("#portLink").removeClass("active")
    $("#contact").show();
    $("#portfolio").hide();
    $("#mainPage").hide();
})
}
