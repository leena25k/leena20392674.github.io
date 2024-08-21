function onMouseOver(id) {
	document.getElementById(id).style.color = 'white';
	document.getElementById(id).style.backgroundColor = '#333';
}

function onMouseOut(id) {
	document.getElementById(id).style.color = '#333';
	if (id == 'staff_page' || id == 'comments_page') {
		document.getElementById(id).style.backgroundColor = 'white';
	} else {
		document.getElementById(id).style.backgroundColor = '#f4f4f4';
	}
}