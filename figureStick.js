function figureStick() {
	
	generateFigure();
	
	let figure = $('.next');
	
	figure[0].style.left = '80px';
	figure[1].style.left = '60px';
	figure[2].style.left = '40px';
	figure[3].style.left = '20px';
	
	figure[0].style.top = figure[1].style.top = figure[2].style.top = figure[3].style.top = '20px';
	
}