function generateFigure() {
	let punto1 = $('<div></div>')[0];
	let punto2 = $('<div></div>')[0];
	let punto3 = $('<div></div>')[0];
	let punto4 = $('<div></div>')[0];
	
	$(next).append(punto1, punto2, punto3, punto4);
	
	punto1.classList.add('next');
	punto2.classList.add('next');
	punto3.classList.add('next');
	punto4.classList.add('next');
}