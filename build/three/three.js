// import * as THREE from 'three';
// const THREE = require('three');
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from '../../node_modules/three/build/three.module.js';
// import GLTFLoader from '../../node_modules/three-gltf-loader/index.js';
// import GLTFLoader from "../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

// import { GLTFLoader }  from "three/examples/jsm/loaders/GLTFLoader.js";
console.log(THREE);
console.log(GLTFLoader);

// init
// const loader = new GLTFLoader();

// loader.load( '/src/testobj/testobj_squre001.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

// loader.load('/src/testobj/testobj_squre001.glb', ( gltf ) => {
//         // called when the resource is loaded
//         scene.add( gltf.scene );
//     }, ( xhr ) => {
//         // called while loading is progressing
//         console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
//     }, ( error ) => {
//         // called when loading has errors
//         console.error( 'An error happened', error );
//     },
// );


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );


const GLTFloader = new GLTFLoader();

GLTFloader.load("../../src/testobj/testobj_squre001.glb", (gltf) => { 
	console.log(gltf);
	scene.add(gltf.scene);
	console.log(gltf.scene);
});

// animation

function animation(time) {
	requestAnimationFrame(animate);

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}