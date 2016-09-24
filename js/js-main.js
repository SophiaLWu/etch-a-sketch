var style = "default";

$(document).ready(function() {
    createTable(16);
    toggleStyle(colorDefault);
    defaultButtonBorder(style)

    // Resets the sketch pad when user clicks "Clear Sketch Pad" button
    $("#clear").click(function() {
        $("td").removeAttr("style");
    });

    // Creates a new sketch pad with user-prompted size when user clicks
    // "New Sketch Pad" button
    $("#new-pad").click(function() {
        newSketch();
    });

    // Makes colors rainbow when user clicks "Rainbow Colors" button
    $("#rainbow").click(function() {
        style = "rainbow"
        defaultButtonBorder(style)
        toggleStyle(rainbowColors);
    });

    // Makes colors gradient black when user clicks "Gradient Black" button
    $("#gradient").click(function() {
        style = "gradient"
        defaultButtonBorder(style)
        $("td").addClass("startGradient");
        toggleStyle(gradientBlack);
    });

    // Makes colors default black when user clicks "Default Black" button
    $("#default").click(function() {
        style = "default"
        defaultButtonBorder(style)
        toggleStyle(colorDefault);
    });


    /***************************************************/
    /************** FUNCTION DEFINITIONS ***************/
    /***************************************************/

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

    // Creates a new sketch pad with the user-prompted size and
    // keeps current style
    function newSketch() {
        var input = prompt("Please enter a valid grid size:");
        if (input < 1) {
            var input = prompt("Please enter a positive number!");
        }
        if (input === null) {
            return;
        }
        $("table").remove();
        createTable(input);
        if (style === "default") {
            toggleStyle(colorDefault);
        }
        else if (style === "rainbow") {
            toggleStyle(rainbowColors);
        }
        else {
            toggleStyle(gradientBlack);
        }
    }

    // Turns off styling and then turns on styling for the currently
    // clicked style button
    function toggleStyle(style) {
        $("td").off("mouseenter");
        $("td").on("mouseenter", style);
        if (style === "colorDefault") {
            style = "default";
        }
        else if (style === "rainbowColors") {
            style = "rainbow";
        }
        else {
            style = "gradient";
        }
    }

    // When user mouses over a box, colors it the default black color
    function colorDefault() {
        $(this).css({"background-color": "black",
                     "opacity": "1.0"});
    }

    // When user mouses over a box, colors it to a random color
    function rainbowColors() {
        var newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        $(this).css({"background-color": newColor,
                     "opacity": "1.0"});
    }

    // When user mouses over a box, colors it to a darker shade of black
    // each time (10% increase in opacity each time the same box is hovered
    function gradientBlack() {
        if (!$(this).hasClass("startGradient") && 
            $(this).css("opacity") > 0) {
                $(this).css("opacity", "+=0.1");
            }
            if ($(this).hasClass("startGradient")) {
                $(this).css({"background-color": "black",
                             "opacity": "0.1"});
                $(this).removeClass("startGradient");
            }
    }

    // Adds red border to current style button and removes border from
    // any other buttons
    function defaultButtonBorder(style) {
        if (style === "default") {
            $("#default").css("border-color", "#DE7777");
            $("#rainbow").css("border-color", "#86bede");
            $("#gradient").css("border-color", "#86bede");
        }
        else if (style === "rainbow") {
            $("#default").css("border-color", "#86bede");
            $("#rainbow").css("border-color", "#DE7777");
            $("#gradient").css("border-color", "#86bede");
        }
        else {
            $("#default").css("border-color", "#86bede");
            $("#rainbow").css("border-color", "#86bede");
            $("#gradient").css("border-color", "#DE7777");
        }
    }

}); 



