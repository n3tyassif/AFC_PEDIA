    import * as THREE from 'three';

        const canvas = document.querySelector('#world-3d');
        const univers = [
          
    

    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_0256_sde1jg', titre: "peluchenator 2" },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_4479_i8y8j1', titre: "morning routine" },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_4305_ttteux', titre: "l'elegance" },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/Screenshot_20250829-190922_ut48t3', titre: "la golluminisation." },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_3747_vbt1wx', titre: "abasourdissant" },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/Snapchat-1544530563_cipcvm', titre: "who tf is this guy ?? 🙏💖" },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/image-112_e2mrjs', titre: "l'amour sans frontiere " },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/F_JeKZoWUAAPntE_ydjb1a', titre: "epstein " },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_3728_sxc3tc', titre: "paff l'eclair " },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_2542_ovq8tm', titre: "chiasse monstre " },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_2571_ssc2g4', titre: "gyat " },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_0508_tuhsez', titre: "il riait. " },
    { type: 'image', url: 'https://res.cloudinary.com/dyhcasitx/image/upload/w_500,f_auto,q_auto/IMG_3689_cvg9ih', titre: "BBL " },
    { type: 'video', url: 'https://res.cloudinary.com/dyhcasitx/video/upload/v1776419424/RPReplay_Final1717177955_tj8xzv.mp4', titre: "GRRR PAW " },
    { type: 'video', url: 'https://res.cloudinary.com/dbymxvjo1/video/upload/v1776419424/RPReplay_Final1700223970_dbulia.mp4', titre: " avec plaisir " },
    { type: 'video', url: 'https://res.cloudinary.com/dbymxvjo1/video/upload/v1776419424/RPReplay_Final1714135805_wxddjh', titre: " ? " },
    { type: 'video', url: 'https://res.cloudinary.com/dbymxvjo1/video/upload/v1776419424/RPReplay_Final1715773057_va0gdf', titre: " tétanisant " },
    { type: 'video', url: 'https://res.cloudinary.com/dbymxvjo1/video/upload/v1776419424/RPReplay_Final1715773028_mjjjlx', titre: " effroyable " },


    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/IMG_1356_rp2tjs', titre: "dégradant" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/IMG_0678_gauiur', titre: "😍" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/20240415_172349_enpq4k', titre: "femimarss origins" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/IMG_2612_ewqmnmk', titre: "reve inatteignable" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/IMG_0385_e95nqx', titre: "LUL" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/IMG_6400_vczddd', titre: "rawrr" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/IMG_1365_n4sqmk', titre: "éblouissante" },
    { type: 'image', url: 'https://res.cloudinary.com/dbymxvjo1/image/upload/w_500,f_auto,q_auto/20240303_033208_l79vxz', titre: "tkt il mord pas" },
];
        

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

const displayHeight = isMobile ? 350 : 700;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / displayHeight, 0.1, 1000);

camera.position.z = isMobile ? 6.5 : 7.5;

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: "high-performance",
    precision: isMobile ? "lowp" : "mediump"
});

renderer.setSize(window.innerWidth, displayHeight);
renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const manager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(manager);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const group = new THREE.Group();
let hoveredObject = null;
const progressBar = document.getElementById('progress-bar');

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    if (progressBar) {
        const progress = (itemsLoaded / itemsTotal) * 100;
        progressBar.style.width = progress + '%';
    }
};

manager.onLoad = function () {
    setTimeout(() => {
        const loaderWrapper = document.getElementById('loader-wrapper');
        if (loaderWrapper) {
            loaderWrapper.style.opacity = '0';
            setTimeout(() => { loaderWrapper.style.display = 'none'; }, 500);
        }
    }, 200); 
};
univers.forEach((item, index) => {
    let texture;
    const isVideo = item.type === 'video' || item.url.includes('.mp4');

    if (isVideo && !isMobile) { 
        const video = document.createElement('video');
        video.src = item.url; 
        video.muted = true; video.loop = true; video.playsInline = true;
        video.crossOrigin = "anonymous";
        video.play().catch(() => {});
        texture = new THREE.VideoTexture(video);
    } else {
        const textureUrl = isVideo ? (item.poster || item.url) : item.url;
        texture = textureLoader.load(textureUrl);
    }
texture.colorSpace = THREE.SRGBColorSpace;
    const geometry = new THREE.PlaneGeometry(1.5, 2);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });
    const mesh = new THREE.Mesh(geometry, material);
    const total = univers.length;
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    mesh.position.setFromSphericalCoords(4, phi, theta);
    mesh.lookAt(0, 0, 0);

    mesh.userData = { 
        titre: item.titre || "Vidéo", 
        url: item.url, 
        type: isVideo ? 'video' : 'image', 
        phi: phi,
        theta: theta 
    };

    group.add(mesh);
});

scene.add(group);

window.showFromSearch = (index) => {
    const barre = document.getElementById('recherche');
    const value = barre ? barre.value : "";
    const hits = fuse.search(value);

    if (hits[index]) {
        const item = hits[index].item;
        const modal = document.getElementById("modal-recherche");
        const modalMedia = document.getElementById("modal-media-recherche");
        const modalTitre = document.getElementById("modal-titre-recherche");

        if (modal && modalMedia && modalTitre) {

            modalTitre.innerText = item.nom; 
            modalTitre.style = ""; 
            
            
            
            modal.style.display = "flex";
        }
    }
};
window.ouvrirOverlay3D = (d) => {
    const modal = document.getElementById("modal-planete");
    const modalMedia = document.getElementById("modal-media-planete");
    const modalTitre = document.getElementById("modal-titre-planete");

    modalTitre.innerText = d.titre;
    modalMedia.innerHTML = d.type === 'video' ? 
        `<video src="${d.url}" controls autoplay loop muted ></video>` :
        `<img src="${d.url}">`;
    
    modal.style.display = "block";
};

window.addEventListener('mousemove', (e) => {
    if (!isVisible) return; 

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        const modPlanete = document.getElementById("modal-planete");
        const modRecherche = document.getElementById("modal-recherche");
        if (modPlanete) modPlanete.style.display = "none";
        if (modRecherche) modRecherche.style.display = "none";
        const mediaPlanete = document.getElementById("modal-media-planete");
        const mediaRecherche = document.getElementById("modal-media-recherche");
        if (mediaPlanete) mediaPlanete.innerHTML = "";
        if (mediaRecherche) mediaRecherche.innerHTML = "";
        return;
    }

    if (!isVisible) return; 

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(group.children);

    if (intersects.length > 0) {
        const d = intersects[0].object.userData;
        
        const modal = document.getElementById("modal-planete");
        const modalMedia = document.getElementById("modal-media-planete");
        const modalTitre = document.getElementById("modal-titre-planete");

        if (modal && modalMedia && modalTitre) {     
            modalTitre.innerText = d.titre || "Sans titre"; 
            modalMedia.innerHTML = d.type === 'video' ? 
                `<video src="${d.url}" controls autoplay loop muted playsinline ></video>` : 
                `<img src="${d.url}">`;
                
            modal.style.display = "block";
        }
    }
});


document.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;

    if (hoveredObject) {
        hoveredObject.scale.set(1, 1, 1);
        hoveredObject = null;
    }
    canvas.style.cursor = 'default';
});

let isVisible = true;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isVisible = entry.isIntersecting; 
        
        if (!isVisible && canvas) {
            canvas.style.cursor = 'default';
            hoveredObject = null;
        }
    });
}, { threshold: 0.1 });


window.addEventListener('resize', () => {
    const containerActuel = document.getElementById('planete-container');
    if (!containerActuel) return;

    const w = containerActuel.clientWidth;
    const h = containerActuel.clientHeight;
    const isMobileActuel = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setSize(w, h);
    renderer.setPixelRatio(isMobileActuel ? 1 : Math.min(window.devicePixelRatio, 1.5));
});

observer.observe(canvas);
let expansion = 0.1;

renderer.outputColorSpace = THREE.SRGBColorSpace;

function animate() {
    requestAnimationFrame(animate);

    if (document.hidden || !isVisible) return; 

    const scrollY = window.scrollY;
    const waitScroll = 620;
    const progress = scrollY > waitScroll ? (scrollY - waitScroll) / 500 : 0;
    
    const baseRadius = (4 + (progress * 15)) * expansion;

    if (group) group.rotation.y += 0.002;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(group.children);

    if (intersects.length > 0) {
        if (hoveredObject !== intersects[0].object) {
            canvas.style.cursor = 'pointer';
            hoveredObject = intersects[0].object;
        }
    } else {
        if (hoveredObject !== null) {
            canvas.style.cursor = 'default';
            hoveredObject = null;
        }
    }

    for (let i = 0; i < group.children.length; i++) {
        const obj = group.children[i];
        const data = obj.userData;
        
        let targetRadius = baseRadius;
        if (hoveredObject === obj) targetRadius += 0.8; 

        if (obj.currentRadius === undefined) obj.currentRadius = targetRadius;
        
        const diff = targetRadius - obj.currentRadius;
        
        if (Math.abs(diff) > 0.001) {
            obj.currentRadius += diff * 0.1;
            
            const phi = data.phi;
            const theta = data.theta;
            const r = obj.currentRadius;
            obj.position.set(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.cos(phi),
                r * Math.sin(phi) * Math.sin(theta)
            );
            obj.lookAt(0, 0, 0);
            
            obj.matrixWorldNeedsUpdate = true;
        }
    }

    if (expansion < 1) {
        expansion += (1 - expansion) * 0.03; 
    }

    renderer.render(scene, camera);
}

animate();
