import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";

function init() {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xEEEEEE); // setClearColorHex 함수 없음
	renderer.setSize(window.innerWidth, window.innerHeight);

	const axes = new THREE.AxesHelper(20); // axisHelper함수 없음 아마도 업데이트 된 듯?
	
	scene.add(axes);

	const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
	const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);

	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 15
	plane.position.y = 0
	plane.position.z = 0
	scene.add(plane);

	const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	const cubeMeterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
	const cube = new THREE.Mesh(cubeGeometry, cubeMeterial);

	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;

	scene.add(cube);

	const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	const sphereMateral = new THREE.MeshBasicMaterial({ color: 0x777ff, wireframe: true });
	const sphere = new THREE.Mesh(sphereGeometry, sphereMateral);

	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;

	scene.add(sphere);

	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);

	const root = document.getElementById("root");
	root.appendChild(renderer.domElement);
	renderer.render(scene, camera);
};

window.onload = init;