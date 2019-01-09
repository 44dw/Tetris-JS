function turningFigure() {
	if (parseInt($('.figure')[0].style.top) < 20) return;
	switch(nowFigure){
		case('angle'):
			turningAngle();
			break;
		case('angle2'):
			turningAngle2();
			break;
		case('stick'):
			turningStick();
			break;
		case('trangle'):
			turningTrangle();
			break;
		case('snake'):
			turningSnake();
			break;
		case('snake2'):
			turningSnake();
			break;
	}
}