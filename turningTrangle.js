function turningTrangle() {
	let figure = $('.figure');
	switch (phase) {
		case(1): 
			figure[2].style.left = parseInt(figure[2].style.left) + 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) - 20 + 'px';
			
			figure[3].style.left = parseInt(figure[3].style.left) + 40 + 'px';
			figure[3].style.top = parseInt(figure[3].style.top) - 40 + 'px';
			
			phase += 1;
			
			break;
		case(2):
			if((fieldRect.left + 10) >= figure[0].getBoundingClientRect().left) break;
		
			figure[2].style.left = parseInt(figure[2].style.left) - 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) - 20 + 'px';
			
			figure[1].style.left = parseInt(figure[1].style.left) - 40 + 'px';
			figure[1].style.top = parseInt(figure[1].style.top) - 40 + 'px';
			
			phase += 1;
			
			break;
		case(3):
			figure[2].style.left = parseInt(figure[2].style.left) - 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) + 20 + 'px';
			
			figure[3].style.left = parseInt(figure[3].style.left) - 40 + 'px';
			figure[3].style.top = parseInt(figure[3].style.top) + 40 + 'px';
			
			phase += 1;
			
			break;
		case(4):
			if((fieldRect.right - 10) <= figure[0].getBoundingClientRect().right) break;
		
			figure[2].style.left = parseInt(figure[2].style.left) + 20 + 'px';
			figure[2].style.top = parseInt(figure[2].style.top) + 20 + 'px';
			
			figure[1].style.left = parseInt(figure[1].style.left) + 40 + 'px';
			figure[1].style.top = parseInt(figure[1].style.top) + 40 + 'px';
			
			phase = 1;
			
			break;	
			
	}
	
}