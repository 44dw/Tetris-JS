function toggleClass() {
	
	let figure = $('.next');
	
	for(let i=0; i<figure.length; i++) {
		$(field).append(figure[i]);
		figure[i].classList.add('figure');
	}
		
	for(let i=(figure.length - 1); i>=0; i--) {
		figure[i].classList.remove('next');
	}	
}