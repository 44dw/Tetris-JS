function goDown() {
	let figure = $('.figure');
	
	if(shoudStop()) {
		clearInterval(interval);
		for(let i=0; i<figure.length; i++) {
			figure[i].classList.add('blocks');
			figure[i].classList.remove('figure');
		}
		testRows();
		newFigure();
		if (isOver() == false) {
			generateNextFigure();
			interval = setInterval(goDown, 1000);
		} else {
			let gameOver = $('#over')[0];
			gameOver.style.display = 'block';
		}
	} else {
	for(let i=0; i<figure.length; i++) {
		let figureStyleTop = getComputedStyle(figure[i]).top;
		figure[i].style.top = parseInt(figureStyleTop) + 20 + 'px';
	}
	}
}