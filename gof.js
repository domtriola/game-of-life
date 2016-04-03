var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gridRows = 20;
var gridColumns = 20;
var cellWidth = canvas.width / gridColumns;
var cellHeight = canvas.height / gridRows;
var grid = [];

function setGrid(rows, columns) {
	for (r=0; r<rows; r++) {
		grid[r] = []
		for (c=0; c<columns; c++) {
			grid[r] = grid[r].concat([cellWidth, cellHeight]);
		}
	}
	return grid;
}

var grid = setGrid(gridRows, gridColumns);

function drawGrid() {
	for (r=0; r<grid.length; r++) {
		for (c=0; c<grid[r].length; c++) {
			ctx.beginPath();
			ctx.rect(r*cellWidth, c*cellHeight, cellWidth, cellHeight);
			ctx.strokeStyle = "#aaa";
			ctx.stroke();
		}
	}
}



drawGrid();

console.log(grid[0]);



