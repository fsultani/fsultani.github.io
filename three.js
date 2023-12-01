import * as THREE from 'three';

const fov = 70;
const aspect = 2; // the javascriptCanvas default
const near = 0.1;
const far = 5;

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const canvas = document.getElementById('three-js-container');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

const camera = new THREE.PerspectiveCamera(50, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const cubes = []; // just an array we can use to rotate the cubes
const loader = new THREE.TextureLoader();

const materials = [
  new THREE.MeshBasicMaterial({ map: loadColorTexture('javascript.png') }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture('typescript.png') }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture('react-light.png') }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture('graphql.png') }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture('mongodb.png') }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture('nodejs.png') }),
];

const mesh = new THREE.Mesh(geometry, materials);

scene.add(mesh);
cubes.push(mesh); // add to our list of cubes to rotate

function loadColorTexture(path) {
  const texture = loader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function render(time) {
  time *= 0.002;

  cubes.forEach((cube, ndx) => {
    const speed = .2 + ndx * .1;
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
  });

  renderer.render(scene, camera);
  scene.background = new THREE.Color(0x006C35)

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

const technologies = [
  'javascript',
  'typescript',
  'react',
  'graphql',
  'apolloclient',
  'redux',
  'mongodb',
  'nodejs',
  'expressjs',
  'emotion',
  'antdesign',
  'cypress',
]

technologies.map(technology => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById(technology) }); 

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const cubes = []; // just an array we can use to rotate the cubes
  const loader = new THREE.TextureLoader();

  const technologyMaterials = [
    new THREE.MeshBasicMaterial({ map: loadColorTexture(`${technology}.png`) }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture(`${technology}.png`) }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture(`${technology}.png`) }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture(`${technology}.png`) }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture(`${technology}.png`) }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture(`${technology}.png`) }),
  ];

  const mesh = new THREE.Mesh(geometry, technologyMaterials);

  scene.add(mesh);
  cubes.push(mesh); // add to our list of cubes to rotate

  function loadColorTexture(path) {
    const texture = loader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  } 

  function render(time) {
    time *= 0.002;
  
    cubes.forEach((cube, index) => {
      const speed = .2 + index * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });
  
    renderer.render(scene, camera);
    scene.background = new THREE.Color(0xffffff);
  
    requestAnimationFrame(render);
  }
  
  requestAnimationFrame(render);
})
