// let cam_x = 30;
// let cam_y = 0;
// let cam_z = 50;
// let cam_rot_y = 0;
// let cam_rot_x = 0;
// let cam_rot_z = 0;

// document.addEventListener('keydown', function(event) {
// var PI = Math.PI;
//     if (event.code == 'KeyA') {
//     cam_x += -Math.cos(cam_rot_y/180*PI) * 1;
//     cam_z += Math.sin(cam_rot_y/180*PI) * 1;
//     }
//     if (event.code == 'KeyD') {
//     cam_x += Math.cos(cam_rot_y/180*PI) * 1;
//     cam_z += -Math.sin(cam_rot_y/180*PI) * 1;
//     }
//     if (event.code == 'KeyS') {
//     cam_z += Math.cos(cam_rot_y/180*PI) * 1;
//     cam_x += Math.sin(cam_rot_y/180*PI) * 1;
//     cam_y += -Math.sin(cam_rot_x/180*PI) * (Math.cos(cam_rot_x/180*PI)) * 1;
//     }
//     if (event.code == 'KeyW') {
//     cam_z += -Math.cos(cam_rot_y/180*PI) * 1;
//     cam_x += -Math.sin(cam_rot_y/180*PI) * 1;
//     cam_y += Math.sin(cam_rot_x/180*PI) * (Math.cos(cam_rot_x/180*PI)) * 1;
//     }
//     if (event.code == "ShiftLeft") {
//     cam_y -= 1;
//     }
//     if (event.code == 'Space') {
//     cam_y += 1;
//     }

//     if (event.code == 'KeyQ'){
//       cam_rot_y+=2;
//     }
//     if (event.code == 'KeyE'){
//       cam_rot_y-=2;
//     }

//     if (event.code == 'KeyR'){
//       cam_rot_x+=2;
//     }
//     if (event.code == 'KeyF'){
//       cam_rot_x-=2;
//     }

//     camera.position.set(cam_x, cam_y, cam_z);
//     camera.rotation.y = cam_rot_y/180*PI;
// 	camera.rotation.x = cam_rot_x/180*PI;
// 	camera.rotation.z = cam_rot_z/180*PI;
// 	//camera.rotation.z = -cam_rot_y/180*PI/2;
// });





var scene, camera, renderer;

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(47, 92, 138)");

var ambientLight = new THREE.AmbientLight("rgb(255, 255, 255)");
scene.add(ambientLight);

function lighting(color, intensity, x, y, z){
var light = new THREE.PointLight(color, intensity);
light.position.set(x, y, z);
scene.add(light);
}

lighting("rgb(255, 255, 255)", 10, 0, 50, 0);
lighting("rgb(255, 255, 255)", 10, 0, -50, 0);
lighting("rgb(255, 255, 255)", 10, 0, 0, 50);
lighting("rgb(255, 255, 255)", 10, 0, 0, -50);
lighting("rgb(255, 255, 255)", 10, 50, 0, 0);
lighting("rgb(255, 255, 255)", 10, -50, 0, 0);


camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
camera.position.set(30 ,0, 50);

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();



var loader = new THREE.GLTFLoader();


function loading(path, x, y, z, scx, scy, scz){
loader.load('models/' + path, function(gltf){
	gltf.scene.scale.set( scx, scy, scz);
	gltf.scene.position.set(x, y, z);
	scene.add(gltf.scene);
	console.log("add");
	renderer.render(scene,camera);
	console.log(scene.children.length);
})
}

loading('grass_block/untitled.glb', 0, 0, 0, 1, 1, 1);
loading('dirt/untitled.glb', 0, 0, 2, 1, 1, 1);
loading('coarse_dirt/untitled.glb', 0, 0, 4, 1, 1, 1);
loading('netherrack/untitled.glb', 0, 0, 6, 1, 1, 1);
loading('soul_sand/untitled.glb', 0, 0, 8, 1, 1, 1);
loading('soul_soil/untitled.glb', 0, 0, 10, 1, 1, 1);
loading('end_stone/untitled.glb', 0, 0, 12, 1, 1, 1);


loading('stone/untitled.glb', 2, 0, 0, 1, 1, 1);
loading('granite/untitled.glb', 2, 0, 2, 1, 1, 1);
loading('polished_granite/untitled.glb', 2, 0, 4, 1, 1, 1);
loading('diorite/untitled.glb', 2, 0, 6, 1, 1, 1);
loading('polished_diorite/untitled.glb', 2, 0, 8, 1, 1, 1);
loading('cobblestone/untitled.glb', 2, 0, 10, 1, 1, 1);
loading('bedrock/untitled.glb', 2, 0, 12, 1, 1, 1);
loading('gravel/untitled.glb', 2, 0, 14, 1, 1, 1);
loading('smooth_stone/untitled.glb', 2, 0, 16, 1, 1, 1);
loading('mossy_cobblestone/untitled.glb', 2, 0, 18, 1, 1, 1);
loading('obsidian/untitled.glb', 2, 0, 20, 1, 1, 1);
loading('basalt/untitled.glb', 2, 0, 22, 1, 1, 1);



loading('oak_planks/untitled.glb', 4, 0, 0, 1, 1, 1);
loading('spruce_planks/untitled.glb', 4, 0, 2, 1, 1, 1);
loading('birch_planks/untitled.glb', 4, 0, 4, 1, 1, 1);
loading('jungle_planks/untitled.glb', 4, 0, 6, 1, 1, 1);
loading('dark_oak_planks/untitled.glb', 4, 0, 8, 1, 1, 1);
loading('acacia_planks/untitled.glb', 4, 0, 10, 1, 1, 1);
loading('crimson_planks/untitled.glb', 4, 0, 12, 1, 1, 1);
loading('warped_planks/untitled.glb', 4, 0, 14, 1, 1, 1);


loading('stripped_oak_wood/untitled.glb', 6, 0, 0, 1, 1, 1);
loading('stripped_spruce_wood/untitled.glb', 6, 0, 2, 1, 1, 1);
loading('stripped_birch_wood/untitled.glb', 6, 0, 4, 1, 1, 1);
loading('stripped_jungle_wood/untitled.glb', 6, 0, 6, 1, 1, 1);
loading('stripped_dark_oak_wood/untitled.glb', 6, 0, 8, 1, 1, 1);
loading('stripped_acacia_wood/untitled.glb', 6, 0, 10, 1, 1, 1);
loading('stripped_crimson_hyphae/untitled.glb', 6, 0, 12, 1, 1, 1);
loading('stripped_warped_hyphae/untitled.glb', 6, 0, 14, 1, 1, 1);


loading('oak_wood/untitled.glb', 8, 0, 0, 1, 1, 1);
loading('spruce_wood/untitled.glb', 8, 0, 2, 1, 1, 1);
loading('birch_wood/untitled.glb', 8, 0, 4, 1, 1, 1);
loading('jungle_wood/untitled.glb', 8, 0, 6, 1, 1, 1);
loading('dark_oak_wood/untitled.glb', 8, 0, 8, 1, 1, 1);
loading('acacia_wood/untitled.glb', 8, 0, 10, 1, 1, 1);
loading('crimson_hyphae/untitled.glb', 8, 0, 12, 1, 1, 1);
loading('warped_hyphae/untitled.glb', 8, 0, 14, 1, 1, 1);


loading('sand/untitled.glb', 12, 0, 0, 1, 1, 1);
loading('red_sand/untitled.glb', 12, 0, 2, 1, 1, 1);
loading('smooth_red_sandstone/untitled.glb', 12, 0, 4, 1, 1, 1);
loading('smooth_sandstone/untitled.glb', 12, 0, 6, 1, 1, 1);
loading('clay/untitled.glb', 12, 0, 8, 1, 1, 1);


loading('gold_ore/untitled.glb', 14, 0, 0, 1, 1, 1);
loading('iron_ore/untitled.glb', 14, 0, 2, 1, 1, 1);
loading('coal_ore/untitled.glb', 14, 0, 4, 1, 1, 1);
loading('nether_gold_ore/untitled.glb', 14, 0, 6, 1, 1, 1);
loading('lapis_ore/untitled.glb', 14, 0, 8, 1, 1, 1);
loading('diamond_ore/untitled.glb', 14, 0, 10, 1, 1, 1);
loading('redstone_ore/untitled.glb', 14, 0, 12, 1, 1, 1);


loading('sponge/untitled.glb', 16, 0, 0, 1, 1, 1);
loading('wet_sponge/untitled.glb', 16, 0, 2, 1, 1, 1);
loading('smooth_quartz/untitled.glb', 16, 0, 4, 1, 1, 1);
loading('snow_block/untitled.glb', 16, 0, 6, 1, 1, 1);
loading('glowstone/untitled.glb', 16, 0, 8, 1, 1, 1);


loading('lapis_block/untitled.glb', 18, 0, 0, 1, 1, 1);
loading('gold_block/untitled.glb', 18, 0, 2, 1, 1, 1);
loading('iron_block/untitled.glb', 18, 0, 4, 1, 1, 1);
loading('diamond_block/untitled.glb', 18, 0, 6, 1, 1, 1);



loading('white_wool/untitled.glb', 20, 0, 0, 1, 1, 1);
loading('orange_wool/untitled.glb', 20, 0, 2, 1, 1, 1);
loading('magenta_wool/untitled.glb', 20, 0, 4, 1, 1, 1);
loading('light_blue_wool/untitled.glb', 20, 0, 6, 1, 1, 1);
loading('yellow_wool/untitled.glb', 20, 0, 8, 1, 1, 1);
loading('lime_wool/untitled.glb', 20, 0, 10, 1, 1, 1);
loading('pink_wool/untitled.glb', 20, 0, 12, 1, 1, 1);
loading('gray_wool/untitled.glb', 20, 0, 14, 1, 1, 1);
loading('light_gray_wool/untitled.glb', 20, 0, 16, 1, 1, 1);
loading('cyan_wool/untitled.glb', 20, 0, 18, 1, 1, 1);
loading('purple_wool/untitled.glb', 20, 0, 20, 1, 1, 1);
loading('blue_wool/untitled.glb', 20, 0, 22, 1, 1, 1);
loading('brown_wool/untitled.glb', 20, 0, 24, 1, 1, 1);
loading('green_wool/untitled.glb', 20, 0, 26, 1, 1, 1);
loading('red_wool/untitled.glb', 20, 0, 28, 1, 1, 1);
loading('black_wool/untitled.glb', 20, 0, 30, 1, 1, 1);



loading('bricks/untitled.glb', 22, 0, 0, 1, 1, 1);
loading('purpur_block/untitled.glb', 22, 0, 2, 1, 1, 1);
loading('purpur_pillar/untitled.glb', 22, 0, 4, 1, 1, 1);
loading('stone_bricks/untitled.glb', 22, 0, 6, 1, 1, 1);
loading('mossy_stone_bricks/untitled.glb', 22, 0, 8, 1, 1, 1);
loading('cracked_stone_bricks/untitled.glb', 22, 0, 10, 1, 1, 1);
loading('chiseled_stone_bricks/untitled.glb', 22, 0, 12, 1, 1, 1);
loading('nether_bricks/untitled.glb', 22, 0, 14, 1, 1, 1);
loading('cracked_nether_bricks/untitled.glb', 22, 0, 16, 1, 1, 1);
loading('chiseled_nether_bricks/untitled.glb', 22, 0, 18, 1, 1, 1);
loading('end_stone_bricks/untitled.glb', 22, 0, 20, 1, 1, 1);





window.addEventListener('resize', function(){
renderer.setSize(window.innerWidth,window.innerHeight);
camera.aspect=window.innerWidth/window.innerHeight;

})

function animate(){
requestAnimationFrame(animate);
renderer.render(scene,camera);
}

animate();