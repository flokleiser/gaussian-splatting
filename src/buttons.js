let demoSplatButton = document.createElement('buttonBig');
demoSplatButton.textContent= "Demo"
demoSplatButton.onclick = function() {
	console.log('Demo');
	demoSplat();
}
document.body.appendChild(demoSplatButton);

let catSplatButton= document.createElement('buttonBig');
catSplatButton.textContent= "Cat"
catSplatButton.onclick = function() {
	console.log('Cat');
	catSplat();
}
document.body.appendChild(catSplatButton);



var buttonRow= document.createElement('div');
buttonRow.id = 'buttonDiv';
buttonRow.appendChild(demoSplatButton)
buttonRow.appendChild(catSplatButton)
document.body.appendChild(buttonRow)
