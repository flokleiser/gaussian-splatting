import Stats from 'three/addons/libs/stats.module.js';


const stats = new Stats()
// stats.domElement.style.position = 'relative';
stats.showPanel(0) 
document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)
    stats.update()
}

animate();