function canMoveLeft() {
	let figure = $('.figure');
	for(let i=0; i<figure.length; i++) {
		let x = parseInt(figure[i].style.left) + fieldRect.left + field.clientLeft - 10;
		let y = parseInt(figure[i].style.top) + fieldRect.top + field.clientTop;
		if (document.elementFromPoint(x, y).classList.contains('blocks')) {
			return false;
		}
	}
	return true;
}