function removeRow(currentRow) {
	
	let cRow = currentRow;
	let removed = $('.removeing');
	
	for (let k=0; k<removed.length; k++) {
		removed[k].remove();
	}
	
	goDownBlocks(cRow);
	/*let currentCell = 1;
	for (let k=0; k<10; k++) {
		let y = fieldRect.top + field.offsetHeight - currentRow * 20 + 10;
		let x = fieldRect.left + currentCell * 20 - 10;
		
		document.elementFromPoint(x, y).remove();
		
		currentCell++;
	}*/
}