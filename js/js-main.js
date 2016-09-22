$(document).ready(function() {
    // Creates a default 16x16 sketch pad
    create_table(16);

    // Colors box when user hovers over it
    $("td").hover(function() {
        $(this).addClass("colored");
    });

    // Resets the sketch pad when user clicks "Clear Sketch Pad" button
    $("#clear").click(function() {
        $("td").removeClass("colored");
    });

    // Creates a new sketch pad with user-prompted size when user clicks
    // "New Sketch Pad" button
    $("#new-pad").click(function() {
        var gridSize = prompt("Please enter a grid size: "); 
    });
});


// Creates a table with num x num dimensions within the wrapper div
function create_table(num) {
    $(".wrapper").append("<table></table>");
    for (var i = 0; i < num; i++) {
        $("table").append("<tr ID='row" + i + "' ");
        for (var j = 0; j < num; j++) {
            $("#row" + i).append("<td></td>");
        }
        $("table").append("</tr>");
    }
}