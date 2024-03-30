import { demoSplat, catSplat, catSplat2, deskSplat, deskSplat2, deskSplat3, toggleBackground } from "./splatTest";
var modelsHidden = true;
var settingsHidden = true;
var modelButton = document.createElement('buttonBig');
modelButton.innerHTML = "<ins>Models</ins>";
modelButton.addEventListener('click', function handleModelClick() {
    if (modelsHidden) {
        modelButton.innerHTML = "Models";
    }
    if (!modelsHidden) {
        modelButton.innerHTML = "<ins>Models</ins>";
    }
});
modelButton.onclick = function () {
    hideModels();
};
document.body.appendChild(modelButton);
var settingsButton = document.createElement('buttonBig');
settingsButton.innerHTML = "<ins>Settings</ins>";
settingsButton.addEventListener('click', function handleSettingsClick() {
    if (settingsHidden) {
        settingsButton.innerHTML = "Settings";
    }
    if (!settingsHidden) {
        settingsButton.innerHTML = "<ins>Settings</ins>";
    }
});
settingsButton.onclick = function () {
    hideSettings();
};
document.body.appendChild(settingsButton);
var backgroundButton = document.createElement('buttonBig');
backgroundButton.textContent = "Void";
backgroundButton.onclick = function () {
    toggleBackground();
};
document.body.appendChild(backgroundButton);
var demoSplatButton = document.createElement('buttonBig');
demoSplatButton.textContent = "Demo";
demoSplatButton.onclick = function () {
    demoSplat();
};
document.body.appendChild(demoSplatButton);
var catSplatButton = document.createElement('buttonBig');
catSplatButton.textContent = "Cat";
catSplatButton.onclick = function () {
    catSplat();
};
document.body.appendChild(catSplatButton);
var catSplatButton2 = document.createElement('buttonBig');
catSplatButton2.textContent = "Cat 2 ";
catSplatButton2.onclick = function () {
    catSplat2();
};
document.body.appendChild(catSplatButton);
var deskSplatButton = document.createElement('buttonBig');
deskSplatButton.textContent = "Desk";
deskSplatButton.onclick = function () {
    deskSplat();
};
document.body.appendChild(deskSplatButton);
var deskSplatButton2 = document.createElement('buttonBig');
deskSplatButton2.textContent = "Desk 2";
deskSplatButton2.onclick = function () {
    deskSplat2();
};
document.body.appendChild(deskSplatButton2);
var deskSplatButton3 = document.createElement('buttonBig');
deskSplatButton3.textContent = "Desk 3";
deskSplatButton3.onclick = function () {
    deskSplat3();
};
document.body.appendChild(deskSplatButton3);
var buttonsRow = document.createElement('div');
buttonsRow.id = "buttonRowDiv";
buttonsRow.appendChild(modelButton);
buttonsRow.appendChild(settingsButton);
document.body.appendChild(buttonsRow);
var sceneButtonRow = document.createElement('div');
sceneButtonRow.id = 'sceneButtonDiv';
sceneButtonRow.appendChild(demoSplatButton);
sceneButtonRow.appendChild(catSplatButton);
sceneButtonRow.appendChild(catSplatButton2);
sceneButtonRow.appendChild(deskSplatButton);
sceneButtonRow.appendChild(deskSplatButton2);
sceneButtonRow.appendChild(deskSplatButton3);
var settingsButtonRow = document.createElement('div');
settingsButtonRow.id = 'settingsButtonDiv';
settingsButtonRow.appendChild(backgroundButton);
function hideModels() {
    modelsHidden = !modelsHidden;
    if (modelsHidden) {
        document.body.removeChild(sceneButtonRow);
    }
    else {
        document.body.appendChild(sceneButtonRow);
    }
}
function hideSettings() {
    settingsHidden = !settingsHidden;
    if (settingsHidden) {
        document.body.removeChild(settingsButtonRow);
    }
    else {
        document.body.appendChild(settingsButtonRow);
    }
}
