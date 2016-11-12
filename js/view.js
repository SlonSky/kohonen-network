var cells = document.getElementsByTagName('td');
for (var i = 0; i < cells.length; i++) {
	cells[i].onclick = function() {

		if(this.style.backgroundColor != 'rgb(0, 0, 0)')
			this.style.backgroundColor = 'rgb(0, 0, 0)'; 
		else
			this.style.removeProperty('background-color');
	};
}

function getUserMatrix() {

}

function setUserMatrix(matrix, table) {
	
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

	var cells = document.getElementsByTagName('td');
	for (var i = 0; i < cells.length; i++) {
		cells[i].onclick = function() {

			if(this.style.backgroundColor != 'rgb(0, 0, 0)')
				this.style.backgroundColor = 'rgb(0, 0, 0)'; 
			else
				this.style.removeProperty('background-color');
		};
	}
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

	var cells = document.getElementsByTagName('td');
	for (var i = 0; i < cells.length; i++) {
		cells[i].onclick = function() {

			if(this.style.backgroundColor != 'rgb(0, 0, 0)')
				this.style.backgroundColor = 'rgb(0, 0, 0)'; 
			else
				this.style.removeProperty('background-color');
		};
	}	
}

function clearTables() {

	console.log('clearTables');

	var cells = document.getElementsByTagName('td');
	for (var i = 0; i < cells.length; i++) {
		cells[i].style.removeProperty('background-color');
	}	
}