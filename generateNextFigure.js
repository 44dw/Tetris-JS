function generateNextFigure() {
	let rand = Math.floor(Math.random() * (8 - 1) + 1);
	
	switch(rand){
		case(1):
			figureSquare();
			nextFigure = 'square';
			break;
		case(2):
			figureAngle();
			nextFigure = 'angle';
			break;
		case(3):
			figureStick();
			nextFigure = 'stick';
			break;
		case(4):
			figureTrangle();
			nextFigure = 'trangle';
			break;
		case(5):
			figureSnake();
			nextFigure = 'snake';
			break;
		case(6):
			figureAngle2();
			nextFigure = 'angle2';
			break;
		case(7):
			figureSnake2();
			nextFigure = 'snake2';
			break;
	}
	
}