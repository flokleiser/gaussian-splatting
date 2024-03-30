import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { LumaSplatsThree, LumaSplatsSemantics } from '@lumaai/luma-web';
const splatArray = [
    //demo
    'https://lumalabs.ai/capture/d80d4876-cf71-4b8a-8b5b-49ffac44cd4a',
    //cat
    "https://lumalabs.ai/embed/dda54514-b5b8-4675-8d4c-a2590acbe399",
    //cat 2
    "https://lumalabs.ai/embed/66bcf4a4-ddbd-4c53-9d89-93f39a943dba",
    //desk
    "https://lumalabs.ai/embed/2c100df7-a93d-4893-9430-fbf9715e012d",
    //desk 2
    "https://lumalabs.ai/embed/f3fa6a0c-de07-4f58-b395-f75f993c1d6f",
    //desk 3
    "https://lumalabs.ai/embed/2a7c971c-fb52-4aca-b7c3-117a9e1016a0",
];
var backgroundEnabled = true;
console.log('compile');
export default function splatTest() { }
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
// scene.background = new Color('black');
let splat = new LumaSplatsThree({
    source: splatArray[1],
    enableThreeShaderIntegration: false,
    // particleRevealEnabled: true,
});
scene.add(splat);
// splat.onInitialCameraTransform = transform => {
// 	transform.decompose(camera.position, camera.quaternion, new Vector3());
// };
// scene.add(createText());
export function demoSplat() {
    scene.remove(splat);
    splat = new LumaSplatsThree({
        source: splatArray[0],
        enableThreeShaderIntegration: false
    });
    scene.add(splat);
    camera.position.z = 7;
}
export function catSplat() {
    scene.remove(splat);
    splat = new LumaSplatsThree({
        source: splatArray[1],
        enableThreeShaderIntegration: false
    });
    scene.add(splat);
    camera.position.z = -7;
}
export function catSplat2() {
    scene.remove(splat);
    splat = new LumaSplatsThree({
        source: splatArray[2],
        enableThreeShaderIntegration: false
    });
    scene.add(splat);
    camera.position.z = 7;
}
export function deskSplat() {
    scene.remove(splat);
    splat = new LumaSplatsThree({
        source: splatArray[3],
        enableThreeShaderIntegration: false
    });
    scene.add(splat);
    camera.position.z = 7;
}
export function deskSplat2() {
    scene.remove(splat);
    splat = new LumaSplatsThree({
        source: splatArray[4],
        enableThreeShaderIntegration: false
    });
    scene.add(splat);
    camera.position.z = -7;
}
export function deskSplat3() {
    scene.remove(splat);
    splat = new LumaSplatsThree({
        source: splatArray[5],
        enableThreeShaderIntegration: false
    });
    scene.add(splat);
    camera.position.z = 7;
}
export function toggleBackground() {
    backgroundEnabled = !backgroundEnabled;
    console.log(backgroundEnabled);
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
// function createText() {
// 	const canvas = document.createElement('canvas');
// 	const context = canvas.getContext('2d');
// 	canvas.width = 1024;
// 	canvas.height = 512;
// 	context.fillStyle = 'rgba(255, 255, 255, 0)';
// 	context.fillRect(0, 0, canvas.width, canvas.height);
// 	context.fillStyle = 'white';
// 	context.font = '200px sans-serif';
// 	context.textAlign = 'center';
// 	context.textBaseline = 'middle';
// 	context.strokeStyle = 'rgba(0, 0, 0, 0.5)'
// 	context.lineWidth = 5;
// 	context.fillText('Hello World', canvas.width / 2, canvas.height / 2);
// 	context.strokeText('Hello World', canvas.width / 2, canvas.height / 2);
// 	const texture = new Texture(canvas);
// 	texture.needsUpdate = true;
// 	const geometry = new PlaneGeometry(5, 2.5);
// 	const material = new MeshStandardMaterial({
// 		map: texture,
// 		transparent: false,
// 		alphaTest: 0.5,
// 		side: DoubleSide,
// 		premultipliedAlpha: true,
// 		emissive: 'white',
// 		emissiveIntensity: 2,
// 	});
// 	const textPlane = new Mesh(geometry, material);
// 	textPlane.position.set(-0.8, 0.9, -0.8);
// 	textPlane.rotation.y = 2.8
// 	textPlane.scale.setScalar(0.6);
// 	return textPlane;
// }
