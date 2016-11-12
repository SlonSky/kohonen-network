// Init
setOnClick();

function click() {
	if(this.style.backgroundColor != 'rgb(0, 0, 0)')
		this.style.backgroundColor = 'rgb(0, 0, 0)'; 
	else
		this.style.removeProperty('background-color');
	
	var row = this.parentNode.rowIndex;
	var column = this.cellIndex;
	
	console.log('Clicked on: ' + row + ' ' + column);

	setMatched(row, column);
}

function setOnClick() {
	var cells = $('#inputTable tr td');
	for (var i = 0; i < cells.length; i++) {
		cells[i].onclick = click;
	}
}

function getUserMatrix() {

}

function setUserMatrix(matrix, table) {
	
}

function switchMode() {
	
}

function addRow() {
	
	var columnsAmount = $('#inputTable tr:first-child td').length;

	// inputTable
	$('#inputTable').append('<tr>');
	for(var i = 0; i < columnsAmount; i++){
		$('#inputTable tr:last-child').append('<td>');
	}

	// outputTable
	$('#outputTable').append('<tr>');
	for(var i = 0; i < columnsAmount; i++){
		$('#outputTable tr:last-child').append('<td>');
	}

	setOnClick();
}

function removeRow() {
	$('#inputTable tr:last-child').remove();
	$('#outputTable tr:last-child').remove();
}

function removeColumn() {
	$('#inputTable tr td:last-child').remove();
	$('#outputTable tr td:last-child').remove();
}

function addColumn() {

	var rowsAmount = $('#inputTable tr').length;

	// inputTable
	for(var i = 0; i < rowsAmount + 1; i++){
		$('#inputTable tr:nth-child(' + i + ')').append('<td>');
	}

	// outputTable
	for(var i = 0; i < rowsAmount + 1; i++){
		$('#outputTable tr:nth-child(' + i + ')').append('<td>');
	}

	setOnClick();
}

function clearTables() {

	console.log('clearTables');

	var cells = document.getElementsByTagName('td');
	for (var i = 0; i < cells.length; i++) {
		cells[i].style.removeProperty('background-color');
	}	
}

