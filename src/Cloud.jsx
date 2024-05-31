import React, { useRef } from 'react'
import { Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'

export default function Cloud(props) {

    const globalwidth= useThree((state) => state.viewport.width)
    
    const cloudClick = (cloud) => {
        console.log(cloud.current.position)
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