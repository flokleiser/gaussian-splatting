var modelsHidden= true;
var settingsHidden = true;

var modelButton = document.createElement('buttonBig');
modelButton.innerHTML= "Models";
modelButton.addEventListener('click', function handleModelClick() {
    if (modelsHidden) {
        modelButton.innerHTML="<ins>Models</ins>" 
    }
    if (!modelsHidden) {
        modelButton.innerHTML= "Models"
    }
	});
modelButton.onclick = function() {
	hideModels()
}
document.body.appendChild(modelButton);

var settingsButton= document.createElement('buttonBig');
settingsButton.innerHTML= "Settings";
settingsButton.addEventListener('click', function handleSettingsClick() {
    if (settingsHidden) {
        settingsButton.innerHTML= "<ins>Settings</ins>"
    }
    if (!settingsHidden) {
        settingsButton.innerHTML= "Settings"
    }
	});
settingsButton.onclick = function() {
	hideSettings()
}
document.body.appendChild(settingsButton);


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

var buttonsRow = document.createElement('div')
buttonsRow.id = "buttonRowDiv"
buttonsRow.appendChild(modelButton)
buttonsRow.appendChild(settingsButton)
document.body.appendChild(buttonsRow)

var sceneButtonRow= document.createElement('div');
sceneButtonRow.id = 'sceneButtonDiv';
sceneButtonRow.appendChild(demoSplatButton)
sceneButtonRow.appendChild(catSplatButton)
sceneButtonRow.appendChild(deskSplatButton)

var settingsButtonRow= document.createElement('div');
settingsButtonRow.id = 'settingsButtonDiv';
settingsButtonRow.appendChild(backgroundButton)




function hideModels() {
	modelsHidden = !modelsHidden
	if (modelsHidden) {
		document.body.removeChild(sceneButtonRow)
	}
	else {
		document.body.appendChild(sceneButtonRow)
	}
}

function hideSettings() {
	settingsHidden= !settingsHidden
	if (settingsHidden) {
		document.body.removeChild(settingsButtonRow)
	}
	else {
		document.body.appendChild(settingsButtonRow)
	}
}

