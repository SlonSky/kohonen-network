
function getUserMatrix() {

}

function setUserMatrix(matrix, table) {
	
}


var cells = document.getElementsByTagName('td');
for (var i = 0; i < cells.length; i++) {
	cells[i].onclick = function() {
		alert(this.cellIndex + ' ' + this.parentNode.rowIndex);
	};
}