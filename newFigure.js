function newFigure() {
	
	let figure = $('.next');
	toggleClass();
	
	switch(nextFigure){
		case('square'):
			
			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			
			figure[0].style.top = figure[1].style.top = '0';
			figure[2].style.top = figure[3].style.top = '20px';
			
			nowFigure = 'square';
			break;
		case('angle'):
		
			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			
			figure[0].style.top = '0';
			figure[1].style.top = figure[2].style.top = figure[3].style.top = '20px';
			
			nowFigure = 'angle';
			
			break;
		case('stick'):

			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 40 + 'px';		
		
			nowFigure = 'stick';
			break;
		case('trangle'):
		
			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			
			figure[0].style.top = '0';
			figure[1].style.top = figure[2].style.top = figure[3].style.top = '20px';
		
			nowFigure = 'trangle';
			break;
		case('snake'):

			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
				
			figure[0].style.top = figure[1].style.top = '0';
			figure[2].style.top = figure[3].style.top = '20px';
		
			nowFigure = 'snake';
			break;
		case('angle2'):
			
			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			
			figure[3].style.top = '0';
			figure[0].style.top = figure[1].style.top = figure[2].style.top = '20px';
			
			nowFigure = 'angle2';
			break;
		case('snake2'):

			figure[0].style.left = field.offsetWidth / 2 -	field.clientLeft + 20 + 'px';
			figure[1].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[2].style.left = field.offsetWidth / 2 -	field.clientLeft + 'px';
			figure[3].style.left = field.offsetWidth / 2 -	field.clientLeft - 20 + 'px';
			
			figure[2].style.top = figure[3].style.top = '0';
			figure[0].style.top = figure[1].style.top = '20px';
			
			nowFigure = 'snake2';
			break;	
	}
	/*if (isOver() == true) {
		clearInterval(interval);
		console.log('GAME OVER');
	}*/
	phase = 1;
}