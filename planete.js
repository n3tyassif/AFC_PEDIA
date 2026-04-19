import * as THREE from 'three';

// 1. CONFIGURATION DU CONTENEUR
const container = document.getElementById('planete-container');
const width = container.clientWidth;
const height = container.clientHeight;

// 2. SCÈNE, CAMÉRA ET RENDU
const scene = new THREE.Scene();
// TEST : Un cube rouge au milieu
const testBox = new THREE.BoxGeometry(1, 1, 1);
const testMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(testBox, testMat);
scene.add(cube);
console.log("Le cube de test a été ajouté à la scène");
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 4; // Distance de vue

const renderer = new THREE.WebGLRenderer({ 
    canvas: document.querySelector('#world-3d'),
    alpha: true, // Fond transparent pour voir ton site derrière
    antialias: true 
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// 3. CRÉATION DE LA SPHÈRE DE JEUX
// On va piocher dans ta liste 'jeux2025' (assure-toi qu'elle est accessible)
function creerPlanete(liste) {
    const group = new THREE.Group(); // On crée un groupe pour faire tourner tout d'un coup
    const textureLoader = new THREE.TextureLoader();

    liste.forEach((jeu, index) => {
        // Géométrie de l'affiche (format portrait)
        const geometry = new THREE.PlaneGeometry(0.7, 1);
        
        // On charge l'image
        const material = new THREE.MeshBasicMaterial({ 
            map: textureLoader.load(jeu.img),
            side: THREE.DoubleSide 
        });

        const card = new THREE.Mesh(geometry, material);

        // --- MATHÉMATIQUES POUR PLACER EN SPHÈRE ---
        const total = liste.length;
        const phi = Math.acos(-1 + (2 * index) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;

        const radius = 2.5; // Taille de la planète
        card.position.set(
            radius * Math.cos(theta) * Math.sin(phi),
            radius * Math.sin(theta) * Math.sin(phi),
            radius * Math.cos(phi)
        );

        // Faire en sorte que chaque carte regarde le centre
        card.lookAt(0, 0, 0);
        
        group.add(card);
    });

    scene.add(group);
    return group;
}

// 4. LANCEMENT ET ANIMATION
// On vérifie si la liste existe avant de lancer
let planeteGroup;
if (typeof jeux2025 !== 'undefined') {
    planeteGroup = creerPlanete(jeux2025);
} else {
    console.error("La liste 'jeux2025' est introuvable. Vérifie tes scripts !");
}


function animate() {
    requestAnimationFrame(animate);

    if (planeteGroup) {
        planeteGroup.rotation.y += 0.003; // Vitesse de rotation
        planeteGroup.rotation.x += 0.001;
    }

    renderer.render(scene, camera);
}

// Gérer le redimensionnement si on change la taille de la fenêtre
window.addEventListener('resize', () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
});

animate();

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(planeteGroup.children, true);

    if (intersects.length > 0) {
        const obj = intersects[0].object;

        if (obj.userData.url) {
            window.location.href = obj.userData.url;
        }
    }
});
