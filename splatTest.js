import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { LumaSplatsThree, LumaSplatsSemantics } from '@lumaai/luma-web';

const splatArray =[
	//demo
	'https://lumalabs.ai/capture/d80d4876-cf71-4b8a-8b5b-49ffac44cd4a',

	//cat
	"https://lumalabs.ai/embed/dda54514-b5b8-4675-8d4c-a2590acbe399",

	//desk
	"https://lumalabs.ai/embed/2c100df7-a93d-4893-9430-fbf9715e012d",
]

var backgroundEnabled = true;

let renderer = new WebGLRenderer({ antialias: false });

renderer.domElement.style.position = 'absolute';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';

document.body.appendChild(renderer.domElement);

let camera = new PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = -7;

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

let scene = new Scene();

let splat = new LumaSplatsThree({
	source: splatArray[1],
	enableThreeShaderIntegration: false

});
scene.add(splat);


window.demoSplat= () => {
	scene.remove(splat);
	splat = new LumaSplatsThree({
		source: splatArray[0],
		enableThreeShaderIntegration:false
	});
	scene.add(splat)

	camera.position.z = 7;
}

window.catSplat = () => {
	scene.remove(splat);
	splat = new LumaSplatsThree({
		source: splatArray[1],
		enableThreeShaderIntegration:false
	});
	scene.add(splat)

	camera.position.z = -7;
}

window.deskSplat = () => {
	scene.remove(splat);
	splat = new LumaSplatsThree({
		source: splatArray[2],
		enableThreeShaderIntegration:false
	});
	scene.add(splat)

	camera.position.z = 7;
}

window.toggleBackground = () => {
	backgroundEnabled = !backgroundEnabled
	console.log(backgroundEnabled)

	if (!backgroundEnabled) {
		splat.semanticsMask = LumaSplatsSemantics.FOREGROUND;
	}

	else if (backgroundEnabled) {
		splat.semanticsMask = LumaSplatsSemantics.FOREGROUND | LumaSplatsSemantics.BACKGROUND;
	}
}

function frameLoop() {
	let canvas = renderer.domElement;
	let width = canvas.clientWidth;
	let height = canvas.clientHeight;

	if (canvas.width !== width || canvas.height !== height) {
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height, false);
	}

	controls.update();

	renderer.render(scene, camera);
}


renderer.setAnimationLoop(frameLoop);