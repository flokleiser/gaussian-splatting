var backgroundButton= document.createElement('buttonBig');
backgroundButton.textContent= "Void"
backgroundButton.onclick = function() {
	console.log('Background');
	toggleBackground();
}
document.body.appendChild(backgroundButton);


var demoSplatButton = document.createElement('buttonBig');
demoSplatButton.textContent= "Demo"
demoSplatButton.onclick = function() {
	console.log('Demo');
	demoSplat();
}
document.body.appendChild(demoSplatButton);

var catSplatButton= document.createElement('buttonBig');
catSplatButton.textContent= "Cat"
catSplatButton.onclick = function() {
	console.log('Cat');
	catSplat();
}
document.body.appendChild(catSplatButton);

var deskSplatButton= document.createElement('buttonBig');
deskSplatButton.textContent= "Desk"
deskSplatButton.onclick = function() {
	console.log('Cat');
	deskSplat();
}
document.body.appendChild(deskSplatButton);

var buttonRow= document.createElement('div');
buttonRow.id = 'buttonDiv';
buttonRow.appendChild(backgroundButton)
buttonRow.appendChild(demoSplatButton)
buttonRow.appendChild(catSplatButton)
buttonRow.appendChild(deskSplatButton)
document.body.appendChild(buttonRow)
