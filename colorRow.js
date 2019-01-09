function colorRow(currentRow) {
	let currentCell = 1;
	for (let k=0; k<10; k++) {
		let y = fieldRect.top + field.offsetHeight - currentRow * 20 + 10;
		let x = fieldRect.left + currentCell * 20 - 10;
		
		document.elementFromPoint(x, y).classList.add('removeing');
		document.elementFromPoint(x, y).classList.remove('blocks');
		
		currentCell++;
	}
	$('#score span').text(+$('#score span').text() + 100);
}