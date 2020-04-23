window.onload = () =>{
	const button = document.createElement('button');
	button.id = 'Placeholders';
	button.textContent = "Add Placeholders";
	document.querySelector("#end").prepend(button);
	button.addEventListener('click', () => addPlaceholders());
}

function addPlaceholders(){
	var url = window.location.href;
	url += '?test=placeholders';
	window.location.href = url;
	console.log("It's printing")
}

