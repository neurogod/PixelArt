function makeGrid() {
    console.log("makeGrid is running!")
    
    // Select size input
    
    var canvas, cell, gridHeight, gridWidth, rows;
    // Submits the user's inputs to make the Grid
    canvas = $('#pixel_canvas');
    gridHeight = $('#input_height').val();
    gridWidth = $('#input_width').val();
    
    canvas.children().remove()
    
    for (x = 0; x < gridHeight; x++) {
    canvas.append('<tr></tr>');
    }
    
    rows = $('tr');
    
    for (y = 0; y < gridWidth; y++) {
    rows.append('<td></td>');
    } 
    
    cell = canvas.find('td');
    
    // When td is clicked, change color 
    cell.click(function() {
        // Select color input
        console.log("changeColor is running!");
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });
    
}

// When size is submitted, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
