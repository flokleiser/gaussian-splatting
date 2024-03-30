// import Stats from 'three/addons/libs/stats.module.js';
import Stats from 'three/examples/jsm/libs/stats.module';
const stats = new Stats();
stats.showPanel(0);
// stats.
stats.dom.style.position = 'absolute';
stats.dom.style.top = 'auto';
stats.dom.style.bottom = '0';
stats.dom.style.right = '0';
stats.dom.style.left = 'auto';
stats.dom.style.scale = '1.5';
document.body.appendChild(stats.dom);
function animate() {
    requestAnimationFrame(animate);
    stats.update();
}
animate();
