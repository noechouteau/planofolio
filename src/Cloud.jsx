import React, { useRef } from 'react'
import { Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import * as THREE from 'three'

export default function Cloud(props) {

    const globalwidth= useThree((state) => state.viewport.width)
    const camera = useThree((state) => state.camera)

    const audioLoader = new THREE.AudioLoader()
    const listener = new THREE.AudioListener();
    camera.add( listener );
    
    const cloudClick = (cloud) => {
        console.log(cloud.current.position)
        audioLoader.load('sounds/cloudBop.mp3', function(buffer){
            const sound = new THREE.PositionalAudio(listener)
            sound.setBuffer(buffer)
            sound.setVolume(0.5)

            sound.setRefDistance(0.5)
            sound.setRolloffFactor(1)
            cloud.current.add(sound)
            sound.play()
        })
        gsap.to(cloud.current.scale,{
            x: globalwidth*0.0078,
            y: globalwidth*0.0078,
            z: globalwidth*0.0078,
            duration: 0.7,
            ease: 'elastic.out'
        })
        gsap.to(cloud.current.scale,{
            x: globalwidth/87,
            y: globalwidth/87,
            z: globalwidth/87,
            duration: 0.7,
            ease: 'elastic.in'
        }).delay(1.5)
        setTimeout(()=>{
            audioLoader.load('sounds/cloudBopReverse.mp3', function(buffer){
                const sound = new THREE.PositionalAudio(listener)
                sound.setBuffer(buffer)
                sound.setVolume(0.5)
                sound.setRefDistance(0.5)
                sound.setRolloffFactor(0.5)
                cloud.current.add(sound)
                sound.play()
            })
        },1900)
    }

    return (
        <Float speed={5} rotationIntensity={0}>
        <primitive rotation={props.rotation} ref={props.cloudRef} object={props.tdmodel.scene.clone()} scale={globalwidth/87} position={props.position} onClick={() => cloudClick(props.cloudRef)}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
        >
        </primitive>
    </Float>
    )
}