function maxLeft() {
	let figure = $('.figure');
	let m = fieldRect.right;
	for(let i=0; i<figure.length; i++) {
		let left = figure[i].getBoundingClientRect().left;
		if (left < m) m = left;
	}
	return m;
}