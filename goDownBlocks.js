function goDownBlocks(currentRow) {
	let blocks = $('.blocks');
	for (let i=0; i<blocks.length; i++) {
		//console.log(parseInt(blocks[i].style.top) + ' ' + (fieldRect.top + field.offsetHeight - currentRow * 20));
		if (parseInt(blocks[i].style.top) < (fieldRect.top + field.offsetHeight - currentRow * 20)) {
			blocks[i].style.top = parseInt(blocks[i].style.top) + 20 + 'px';
		}
	}
}