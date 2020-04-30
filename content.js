// window.onload = () =>{
// 	const button = document.createElement('button');
// 	button.id = 'Placeholders';
// 	button.textContent = "Add Placeholders";
// 	document.querySelector("LI").prepend(button);
// 	button.addEventListener('click', () => addPlaceholders());
// }

// function addPlaceholders(){
// 	var url = window.location.href;
// 	url += '?test=placeholders';
// 	window.location.href = url;
// 	console.log("It's printing")
// }
window.onload = () =>{
	const placeholders = document.createElement('button');
	const houseads = document.createElement('button');
	const cache = document.createElement('button');

	placeholders.id = 'Placeholders';
	houseads.id = 'houseads';
	cache.id = 'cache';

	placeholders.textContent = "Add Placeholders";
	houseads.textContent = "Add houseads";
	cache.textContent = "Add Cache";

	document.querySelector("div:first-of-type").prepend(placeholders, houseads, cache);
	placeholders.addEventListener('click', () => addPlaceholders());
	houseads.addEventListener('click', ()=> addHouseAds());
	cache.addEventListener('click', ()=>add123());
}

function addPlaceholders(){
	var url = window.location.href;
	if (url.indexOf('?test') < 0){
		url += '?test=placeholders';
	}else{
		console.log("there's one there already")
	}
	window.location.href = url;
}

function addHouseAds(){
	var url = window.location.href;
	if (url.indexOf('?test') < 0){
		url += '?test=houseads';
	}else{
		console.log("there's one there already")
	}
	window.location.href = url;
}

function add123(){
	var url = window.location.href;
	if (url.indexOf('?test') < 0){
		url += '?test=1234';
	}else{
		console.log("there's one there already")
	}
	window.location.href = url;
}