import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Text, Image, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Island(props) {

    const text3ref = useRef()
    const imageRef = useRef()
    const camera = useThree((state) => state.camera)
    const plane = props.planeRef
    const listener = new THREE.AudioListener()
    camera.add(listener)
    const audioLoader = new THREE.AudioLoader()
    let desac = true

    const interHover = () => {
        gsap.to(imageRef.current.material, {duration: 0.5, opacity:1.0, ease: 'ease.out'})
        document.body.style.cursor = 'pointer'
    }

    const interOut = () => {
        gsap.to(imageRef.current.material, {duration: 0.5, opacity:0.5, ease: 'ease.out'})
        document.body.style.cursor = 'auto'
    }

    const infoClick = () => {
        const nb = Math.floor(Math.random() * 4) + 1
        audioLoader.load('sounds/pop'+nb+".mp3", function(buffer){
            const sound = new THREE.PositionalAudio(listener)
            sound.setVolume(0.5)
            sound.setBuffer(buffer)
            sound.setRefDistance(1)
            sound.setRolloffFactor(1)
            imageRef.current.add(sound)
            sound.play()
        })
        props.onInfoClicked(props.infoOffset, props.refer, props.infoPos, props.infoScale)
    }

    return(<Float speed={props.speed} rotationIntensity={0}>
        
    <Image url="/inte.png" transparent opacity={0.5} position={props.imagePosition} ref={imageRef} onPointerOver={interHover} onPointerOut={interOut} onClick={infoClick}/>

    <Text position={props.textPosition} color="white" font={"/fonts/MPLUSRounded1c-Black.ttf"} ref={text3ref} scale={0}>{props.text}</Text>
    <primitive ref={props.refer} object={props.scene} scale={props.scaled} position={props.position} onClick={() => {
        
        audioLoader.load('sounds/star.mp3', function(buffer){
            const sound = new THREE.PositionalAudio(listener)
            sound.setVolume(2.5)
            sound.setBuffer(buffer)
            sound.setRefDistance(1)
            sound.setRolloffFactor(1)
            props.refer.current.add(sound)
            sound.play()
        })
        window.open(props.link)
    
    }}
        onPointerOver={desac ?() => {
            gsap.to(text3ref.current.scale, {duration: 0.5, x:0.7,y:0.7,z:0.7, ease: 'expo.out'})
            document.body.style.cursor = 'pointer'
        } : null}
        onPointerOut={desac ? () => {
            gsap.to(text3ref.current.scale, {duration: 0.5, x:0,y:0,z:0, ease: 'expo.out'})
            document.body.style.cursor = 'auto'
        }: null}
    >
    </primitive>
</Float>)
}