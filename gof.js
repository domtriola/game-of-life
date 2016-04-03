/* Things to fix
	
	- add edge cases for runLife()
	- create different functions for various starting positions to 
	  get a better idea of what is going on

*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gridRows = 30;
var gridColumns = 30;
var cellWidth = canvas.width / gridColumns;
var cellHeight = canvas.height / gridRows;
var grid = [];

//starting positions
function block() {

}

function setGrid(rows, columns) {
	for (r=0; r<rows; r++) {
		grid[r] = []
		for (c=0; c<columns; c++) {
			//randomly set initial life (at 50% chance to be alive)
			var iniAlive = Math.floor(Math.random()*2);
			grid[r][c] = { x: r*cellWidth , y: c*cellHeight, isAlive: iniAlive, willBe: iniAlive}
		}
	}
	return grid;
}

var grid = setGrid(gridRows, gridColumns);

function drawGrid() {
	for (r=0; r<grid.length; r++) {
		for (c=0; c<grid[r].length; c++) {
			//name cell for easier reference
			var cell = grid[r][c];

			//draw cell
			ctx.beginPath();
			ctx.rect(cell.x, cell.y, cellWidth, cellHeight);
			ctx.strokeStyle = "#aaa";
			ctx.stroke();
			if(cell.isAlive) {
				ctx.fillStyle = "#0056ff";
				ctx.fill();
			}
			ctx.closePath();
		}
	}
}

//acts like a torus??
function runLife() {

	//determine whether cells will be alive or dead
	for (r=0; r<grid.length; r++) {
		for (c=0; c<grid[r].length; c++) {
			//name cell for easier reference
			var cell = grid[r][c];
			//count live neighbors
			count = 0;
			
			
			//for non-edge cases
			for (i=r-1; i<r+4; i++) {
				for (j=c-1; j<c+4; j++) {	
					
					//setup edge variables
					var leftEdge = 0;
					var rightEdge = 0;
					var topEdge = 0;
					var bottomEdge = 0;

					if (i<0) {
						leftEdge = 1;
					} else if (i > gridColumns - 1) {
						rightEdge = 1;
					}
					if (j<0) {
						topEdge = 1;
					} else if (j > gridRows - 1) {
						bottomEdge = 1;
					}


					if (leftEdge && topEdge) {

					} else if (leftEdge && bottomEdge) {

					} else if (leftEdge) {

					} else if (rightEdge && topEdge) {

					} else if (rightEdge && bottomEdge) {

					} else if (rightEdge) {

					} else if (topEdge) {

					} else if (bottomEdge) {

					} else {
						//console.log(bottomEdge);
						//console.log("i: " + i);
						//console.log("j: " + j);
						if (grid[i][j].isAlive && (i!=r && j!=c)) {
							count+=1;
						}
					}
					
				}
			}

			
			if (cell.isAlive) {	
				if (count > 1 && count < 4) {
					cell.willBe = 'alive';
				} else {
					cell.willBe = 'dead';
				}
			} else if (count == 3) {
				cell.willBe = 'alive';
			} else {
				cell.willBe = 'dead';
			}
			
		}
	}


	//assign willBe states to isAlive state
	for (r=0; r<grid.length; r++) {
		for (c=0; c<grid[r].length; c++) {
			//name cell for easier reference
			var cell = grid[r][c];
			if (cell.willBe == 'alive') {
				cell.isAlive = 1;
			} else {
				cell.isAlive = 0;
			}
		}
	}

}

//draw initial grid
drawGrid();

t=0;

function draw() {
	if (t == 4) { 
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawGrid();
		runLife();
		//console.log('testing');
		t=0;
	} else {
		t++;
	}

	requestAnimationFrame(draw);
}

draw();




