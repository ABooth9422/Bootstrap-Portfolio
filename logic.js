$(document).ready(function(){
   load();
   mainScreen();
   portfolio();
   contact();
   source();
   details();
    
})
$("#inLink").on("click",function(){
    $("#inLink").addClass("active")
    $("#contactLink").removeClass("active")
    $("#mainLink").removeClass("active")
    $("#portfolio").show()
    $("#mainPage").hide();
    $("#contact").hide(); 
})

$("#connect").on("click",function(){
    $("#contactLink").addClass("active")
    $("#mainLink").removeClass("active")
    $("#portLink").removeClass("active")
    $("#contact").show();
    $("#portfolio").hide();
    $("#mainPage").hide();
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

function source(){
    $(".source").on("click",function(){
    $("#modalRow").empty()
    $("#modalRow").addClass("p-5")
    $(this).attr("data-target",".modalText")
    $(this).attr("data-toggle","modal")
    var data =$(this).data("link")
    console.log(data)
    var content=$("<a>")
    content.attr("href",data)
    content.attr("target","_blank")
    console.log(data)
    content.text(data)
    content.appendTo("#modalRow")
})
}
function details(){
    $(".details").on("click",function(){
        var tech=$(this).data("technologies")
        techArray=tech.split(",")
        $("#modalRow").empty()
        var modal=$("#modalRow")
        modal.addClass("p-5")
        $(this).attr("data-target",".modalText")
        $(this).attr("data-toggle","modal")
        var data=$(this).data("details")
        var heading=$("<h1>")
        var techHead=$("<h3>")
        techHead.css("text-decoration","underline")
        techHead.text("Technologies used")
        var ul=$("<ul>")
        heading.css("text-decoration","underline")
        heading.text("Project Details")
        heading.addClass("mb-3")
        var details=$("<p>")
        details.text(data)
        modal.append(heading,details,techHead)
        techHead.append(ul)
        techArray.forEach(element => {
            var li=$("<li>")
            li.text(element)
            li.appendTo(techHead)
        });
        
    })
}

