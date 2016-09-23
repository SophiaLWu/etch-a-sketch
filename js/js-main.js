var colorType = "default";

$(document).ready(function() {
    createTable(16);
    if (colorType === "default") {
        colorDefault();
    }

    // Resets the sketch pad when user clicks "Clear Sketch Pad" button
    $("#clear").click(function() {
        $("td").removeAttr("style");
    });

    // Creates a new sketch pad with user-prompted size when user clicks
    // "New Sketch Pad" button
    $("#new-pad").click(function() {
        newSketch();
        if (colorType === "default") {
            colorDefault();
        }   
        else if (colorType === "rainbow") {
            rainbowColors();
        }
        else {
            gradientBlack();
        }
    });

    // Makes colors rainbow when user clicks "Rainbow Colors" button
    $("#rainbow").click(function() {
        colorType = "rainbow";
        rainbowColors();
    });

    // Makes colors gradient black when user clicks "Gradient Black" button
    $("#gradient").click(function() {
        colorType = "gradient";
        gradientBlack();
        $("td").addClass("startGradient");
    });

    // Makes colors default black when user clicks "Default Black" button
    $("#default").click(function() {
        colorType = "default";
        colorDefault();
    });

});


//***************************************************//
//******************** FUNCTIONS ********************//
//***************************************************//

// Creates a table with num x num dimensions in the wrapper div
function createTable(num) {
    $(".wrapper").append("<table></table>");
    for (var i = 0; i < num; i++) {
        $("table").append("<tr ID='row" + i + "' ");
        for (var j = 0; j < num; j++) {
            $("#row" + i).append("<td></td>");
        }
        $("table").append("</tr>");
    }
}

// When user mouses over a box, colors it the default black color
function colorDefault() {
    $("td").mouseover(function() {
        $(this).css("background-color", "black");
        //$(this).css("opacity", "1.0");
    });
}

// Creates a new sketch pad with the user-prompted size
function newSketch() {
    var input = prompt("Please enter a grid size:");
    if (input === null) {
        return;
    }
    $("td").removeClass("colored");
        $("table").remove();
        createTable(input);
}

// Changes colors of hovering to randomized rainbow
function rainbowColors() {
    $("td").mouseover(function() {
        var newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color", newColor);
    });

};

// Changes colors of hovering to gradient black (darker each time the
// user hovers over the same box)
function gradientBlack() {
    $("td").mouseover(function() {
        if (!$(this).hasClass("startGradient") && 
        $(this).css("opacity") > 0) {
            $(this).css("opacity", "+=0.1");
        }
        if ($(this).hasClass("startGradient")) {
            $(this).css("background-color", "black");
            $(this).css("opacity", "0.1");
            $(this).removeClass("startGradient");
        }
    });
}

