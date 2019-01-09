function turningSnake() {
	let figure = $('.figure');
	switch(phase) {
		case(1):
			figure[0].style.left = parseInt(figure[0].style.left) - 20 + 'px';
			figure[0].style.top = parseInt(figure[0].style.top) - 20 + 'px';
			
			figure[2].style.left = parseInt(figure[2].style.left) + 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) - 20 + 'px';
			
			figure[3].style.left = parseInt(figure[3].style.left) + 40 + 'px';
			figure[3].style.top = parseInt(figure[3].style.top) + 'px';
			
			phase += 1;
			
			break;
		case(2):
			if((fieldRect.left + 10) >= figure[0].getBoundingClientRect().left) break;
		
			figure[0].style.left = parseInt(figure[0].style.left) + 20 + 'px';
			figure[0].style.top = parseInt(figure[0].style.top) + 20 + 'px';
			
			figure[2].style.left = parseInt(figure[2].style.left) - 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) + 20 + 'px';
			
			figure[3].style.left = parseInt(figure[3].style.left) - 40 + 'px';
			figure[3].style.top = parseInt(figure[3].style.top) + 'px';
			
			phase = 1;
			
			break;
	}
	
}