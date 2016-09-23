$(document).ready(function() {
    create_table(16);
    color_default();

    // Resets the sketch pad when user clicks "Clear Sketch Pad" button
    $("#clear").click(function() {
        $("td").removeClass("colored");
    });

    // Creates a new sketch pad with user-prompted size when user clicks
    // "New Sketch Pad" button
    $("#new-pad").click(function() {
        new_sketch();
        color_default();
    });
});


//***************************************************//
//******************** FUNCTIONS ********************//
//***************************************************//

// Creates a table with num x num dimensions in the wrapper div
function create_table(num) {
    $(".wrapper").append("<table></table>");
    for (var i = 0; i < num; i++) {
        $("table").append("<tr ID='row" + i + "' ");
        for (var j = 0; j < num; j++) {
            $("#row" + i).append("<td></td>");
        }
        $("table").append("</tr>");
    }
    var squareSize = Math.floor(100/num) + "%";
    $("td").css({"width": squareSize, "height": squareSize});
}

// When user mouses over a box, colors it the default black color
function color_default() {
    $("td").mouseover(function() {
        $(this).addClass("colored");
    });

}

// When user clicks "New Sketch Pad" button, creates a new sketch pad
// with the user-prompted size
function new_sketch() {
    var input = prompt("Please enter a grid size:");
    if (input === null) {
        return;
    }
    $("td").removeClass("colored");
        $("table").remove();
        create_table(input);
}



