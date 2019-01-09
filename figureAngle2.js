function figureAngle2() {
	
	generateFigure();
	
	let figure = $('.next');
	
	figure[0].style.left = '20px';
	figure[1].style.left = '20px';
	figure[2].style.left = '40px';
	figure[3].style.left = '60px';
	
	figure[0].style.top = '20px';
	figure[1].style.top = figure[2].style.top = figure[3].style.top = '40px';
}