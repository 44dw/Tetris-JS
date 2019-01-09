function shoudStop() {
	
	let figure = $('.figure');
	
	for(let i=0; i<figure.length; i++) {
		let figureRect = figure[i].getBoundingClientRect();
		
		let point = [];
		point.push((figureRect.left + 10), (figureRect.bottom + 10))
		
		if (((document.elementFromPoint(point[0], point[1])) !== field) &&
			!((document.elementFromPoint(point[0], point[1])).classList.contains('figure'))) {
				return true;
			}
	}
	
	return false;
	
}
