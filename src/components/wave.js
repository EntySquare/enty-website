/* eslint-disable */
let SEPARATION = 100,
    AMOUNTX = 50,
    AMOUNTY = 50
let container   //渲染容器，一般是自己设定的具有特定id或class的html元素
let camera, scene, renderer   //相机，场景，渲染 三要素一般不可缺少
let particles,
    particle,
    count = 0
let mouseX = 50,  //用于鼠标指针跟随的变量，影响渲染对象的观察视角，这里保留用于调整视角
    mouseY = -200
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;

import * as THREE from 'three55'   //npm install three 后，将three引用进js（注意版本，three.js版本跨度大，很多方法可能不兼容，需要留意，后续会提到）

function initWave(id) {
    //初始化相机，用于观察场景，可设置视角的远近，长宽比，方向等
    camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        20,
        2000
    )
    camera.position.z = 500
    //初始化场景，后续会在此场景中添加元素
    scene = new THREE.Scene()

    //设置材质，注意这里只是属性，不属于实体元素
    let PI2 = Math.PI * 2
    particles = new Array()
    let material = new THREE.ParticleCanvasMaterial({
        color: 0x6a66e7,
        program: function (context) {
            context.beginPath()
            context.arc(0, 0, 1, 0, PI2, true)
            context.fill()
        }
    })
    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
            //初始化实体元素，并添加材质属性。这里的材质是颗粒
            particle = particles[i++] = new THREE.Particle(material)
            particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
            particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
            //将实体元素放入到场景
            scene.add(particle)
        }
    }

    //初始化渲染器，这部分是操作GPU的，可根据不同用途来决定用什么渲染器。具体，参考官方文档
    renderer = new THREE.CanvasRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    //获取并将渲染器绑定到容器
    container = document.getElementById(id)
    container.appendChild(renderer.domElement)

    //以上只是初始化作用，实际并没有实现动态的逻辑
    // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    // document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    // document.addEventListener( 'touchmove', onDocumentTouchMove, false );
    // window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
    // windowHalfX = window.innerWidth / 2;// windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

/* 用于鼠标指针跟随，此项目禁用
function onDocumentMouseMove( event ) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}

function onDocumentTouchMove( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}*/

// 特定写法，直接抄就好了
function animate() {
    requestAnimationFrame(animate)
    render()
}
// 动态的逻辑
function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.05
    camera.position.y += (-mouseY - camera.position.y) * 0.05
    camera.lookAt(scene.position)
    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++]
            particle.position.y =
                Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50
            particle.scale.x = particle.scale.y =
                (Math.sin((ix + count) * 0.3) + 1) * 2 +
                (Math.sin((iy + count) * 0.5) + 1) * 2
        }
    }
    renderer.render(scene, camera)
    count += 0.06
}
// 导出方法
export default {
    initWave,
    animate,
    onWindowResize
}
