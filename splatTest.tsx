import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { LumaSplatsThree } from '@lumaai/luma-web';

let renderer = new WebGLRenderer({ antialias: false });

renderer.domElement.style.position = 'absolute';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';

// add canvas to DOM
document.body.appendChild(renderer.domElement);

let camera = new PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 2;

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

let scene = new Scene();

let splat = new LumaSplatsThree({
    source: 'https://lumalabs.ai/capture/d80d4876-cf71-4b8a-8b5b-49ffac44cd4a'
});
scene.add(splat);

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