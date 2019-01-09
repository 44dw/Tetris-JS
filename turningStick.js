function turningStick() {
	let figure = $('.figure');
	switch(phase) {
		case(1):
			figure[0].style.left = parseInt(figure[0].style.left) - 20 + 'px';
			figure[0].style.top = parseInt(figure[0].style.top) - 20 + 'px';

			figure[2].style.left = parseInt(figure[2].style.left) + 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) + 20 + 'px';
			
			figure[3].style.left = parseInt(figure[3].style.left) + 40 + 'px';
			figure[3].style.top = parseInt(figure[3].style.top) + 40 + 'px';
			
			phase += 1;
			
			break;
		
		case(2):
			if((fieldRect.left + 40) >= figure[3].getBoundingClientRect().left) break;
			if((fieldRect.right - 20) <= figure[3].getBoundingClientRect().right) break;
			
			figure[0].style.left = parseInt(figure[0].style.left) + 20 + 'px';
			figure[0].style.top = parseInt(figure[0].style.top) + 20 + 'px';

			figure[2].style.left = parseInt(figure[2].style.left) - 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) - 20 + 'px';
			
			figure[3].style.left = parseInt(figure[3].style.left) - 40 + 'px';
			figure[3].style.top = parseInt(figure[3].style.top) - 40 + 'px';
			
			phase = 1;
			
			break;
	}
}