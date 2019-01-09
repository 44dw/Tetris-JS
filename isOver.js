function isOver() {
	let figure = $('.figure');
	
	for (let i=0; i<figure.length; i++) {
		let fRect = figure[i].getBoundingClientRect();
		let x = fRect.left + 10;
		let y = fRect.top + 10;
		//console.log(fRect.left + ' ' + fRect.top);
		if (document.elementFromPoint(x, y).classList.contains('blocks')) return true;
	}
	
	return false;
}