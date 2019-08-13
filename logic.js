$(document).ready(function(){
   load();
   mainScreen();
   portfolio();
   contact();
   source();
   details();
    
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
        $("#modalRow").empty()
        var modal=$("#modalRow")
        modal.addClass("p-5")
        $(this).attr("data-target",".modalText")
        $(this).attr("data-toggle","modal")
        var data=$(this).data("details")
        console.log(data)
        var heading=$("<h1>")
        heading.css("text-decoration","underline")
        heading.text("Project Details")
        heading.addClass("mb-3")
        var details=$("<p>")
        details.text(data)
        modal.append(heading,details)
    })
}

