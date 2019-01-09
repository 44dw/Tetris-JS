function maxRight() {
	let figure = $('.figure');
	let m = fieldRect.left;
	for(let i=0; i<figure.length; i++) {
		let right = figure[i].getBoundingClientRect().right;
		if (right > m) m = right;
	}
	return m;
}