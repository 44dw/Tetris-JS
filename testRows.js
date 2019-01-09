function testRows() {
	this.currentRow = 1;
	let currentCell;
	for (let i=0; i<19; i++) {
		currentCell = 1;
		for (let k=0; k<10; k++) {
			let y = fieldRect.top + field.offsetHeight - currentRow * 20 + 10;
			let x = fieldRect.left + currentCell * 20 - 10;
			if (document.elementFromPoint(x, y) == field) {
				//console.log('№' + k + ' ' + x + ':' + y + ': дырка');
				break;
			} else if (k == 9) {
				colorRow(this.currentRow);
				let nowRow = this.currentRow;
				setTimeout(function() {	
				removeRow(nowRow);
				}, 300)
			}
			//console.log('№' + k + ' ' + x + ':' + y + ': кубик');
			currentCell++;
		}
		currentRow++;
	}
}