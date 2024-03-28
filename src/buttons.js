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
	test();
}
document.body.appendChild(demoSplatButton);

var catSplatButton= document.createElement('buttonBig');
catSplatButton.textContent= "Cat"
catSplatButton.onclick = function() {
	console.log('Cat');
}
document.body.appendChild(catSplatButton);

var buttonRow= document.createElement('div');
buttonRow.id = 'buttonDiv';
buttonRow.appendChild(backgroundButton)
buttonRow.appendChild(demoSplatButton)
buttonRow.appendChild(catSplatButton)
document.body.appendChild(buttonRow)
