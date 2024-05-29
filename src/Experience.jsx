import { shaderMaterial,useGLTF, OrbitControls, useScroll, Scroll, Text, Float, Center, Text3D, useHelper, Trail, useCursor } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { InstancedRigidBodies, CylinderCollider, BallCollider, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useMemo, useEffect, useState, useRef } from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { Outline, EffectComposer} from '@react-three/postprocessing'
import * as THREE from 'three'
import homeTextVertexShader from './shaders/hometext/vertex.glsl'
import homeTextFragmentShader from './shaders/hometext/fragment.glsl'

import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'

import { BlendFunction } from 'postprocessing'
import { gsap } from "gsap";


const TextMaterial = shaderMaterial(
    {
        uTime : 0,
        uColorStart : new THREE.Color('#ffcc00'),
        uColorEnd : new THREE.Color('#ff0055')
    },
    homeTextVertexShader,
    homeTextFragmentShader
)

extend({TextMaterial})

export default function Experience()
{
    const scroll = useScroll()
    const textRef1 = useRef()
    const textRef2 = useRef()

    const cloudModel = useGLTF('models/cloud.glb')
    const cloudModel2 = useGLTF('models/cloud2.glb')
    const cloudModel3 = useGLTF('models/cloud3.glb')
    const planeModel = useGLTF('models/plane.glb')
    const cloudBowlModel = useGLTF('models/cloudBowl.glb')
    const baliseModel = useGLTF('models/balise.glb')
    const cloudPortalModel = useGLTF('models/cloudPortal.glb')
    const cloudBlobModel = useGLTF('models/cloudBlob.glb')
    const cloudTrainModel = useGLTF('models/cloudTrain.glb')

    const portalLightMaterial = new THREE.ShaderMaterial({ 
        uniforms : {
            uTime: {value: 0},
            uColorStart: {value: new THREE.Color("#fec8f7")},
            uColorEnd: {value: new THREE.Color("#A775FF")},
            softness: {value: 5.0}
            
        },
        transparent: true,
        vertexShader: portalVertexShader,
        fragmentShader: portalFragmentShader,
     })
    
    const portalLightMesh = cloudPortalModel.scene.children.find((child) => child.name === 'portalLight')
    portalLightMesh.material = portalLightMaterial

    const planeRef = useRef()
    const light1 = useRef()
    const light2 = useRef()
    const cloud1ref = useRef()
    const cloud2ref = useRef()
    const cloud3ref = useRef()
    const cloud4ref = useRef()
    const cloud5ref = useRef()
    const cloud6ref = useRef()
    const baliseRef = useRef()
    const cloudBowlref = useRef()
    const cloudPortalref = useRef()
    const cloudBlobref = useRef()
    const cloudTrainref = useRef()
    let [startAnimFinished, setStartAnimFinished] = useState(false)
    let [lastOffset, setLastOffset] = useState(0)
    let [currentRotation, setCurrentRotation] = useState(0)

    useEffect(() => {
        console.log("satrt")
        gsap.to(planeRef.current.position,{
            x: 0,
            duration: 2.5,
            ease: 'ease.out'
        }
        ).then(()=>{
            let div= document.querySelector("#root").children[0].children[0].children[2]
            console.log(div.style)
            div.style.pointerEvents = 'all'
            setStartAnimFinished(true)
        })
        gsap.to(planeRef.current.rotation,{
            x: -Math.PI*2,
            duration: 1.5,
            ease: 'ease.out'
        }
        )
    },[])

    const viewport = useThree((state) => state.viewport)
    

    const cloudClick = (cloud) => {
        console.log(cloud.current.position)
        gsap.to(cloud.current.scale,{
            x: 0.1,
            y: 0.1,
            z: 0.1,
            duration: 0.7,
            ease: 'elastic.out'
        })
        gsap.to(cloud.current.scale,{
            x: 0.15,
            y: 0.15,
            z: 0.15,
            duration: 0.7,
            ease: 'elastic.in'
        }).delay(1.5)
    }

    // const planeClick = () => {
    //     if(scroll.delta != 0) return
    //     gsap.to(planeRef.current.rotation,{
    //         x: currentRotation + Math.PI*2,
    //         duration: 2.,
    //         ease: 'power3.out'
    //     }
    //     ).then(()=>{planeRef.current.rotation.x = currentRotation})
    // }


    // useHelper(light1, THREE.DirectionalLightHelper,1, 'white')
    // useHelper(light2, THREE.DirectionalLightHelper,1, 'black')

    const c1 = scroll.curve(0, 1.1/10)
    const c2 = scroll.curve(1.1/10, 1.2/10)
    const r1 = scroll.range(1.1/10, 1.2/10)
    const r2 = scroll.range(1.2/10, 4/10)

    useFrame((state, delta) =>
    {
        const time = state.clock.getElapsedTime()

    

        setLastOffset(scroll.offset)
        if(!startAnimFinished) return
        planeRef.current.position.x = scroll.offset  * viewport.width *3
        planeRef.current.position.z = -c1
        planeRef.current.rotation.z = c2/2
        planeRef.current.position.y = r1*2-1

        planeRef.current.rotation.x = c1 -c2/2 + r2
        setCurrentRotation(planeRef.current.rotation.x)


        // console.log(lastOffset)
        // planeRef.current.position.x += 0.02
        // planeRef.current.rotation.x += 0.002

    })


    return <>

        <Perf position="top-left" />

        {/* <OrbitControls></OrbitControls> */}
        <directionalLight position={[ 5, 4.5, -2]} intensity={ 5. } ref={light1} color="rgb(155,155,155)" />
        <directionalLight position={[ 0, 0, 5 ]} intensity={ 8. } ref={light2} color="rgb(84,106,255)" />
        <ambientLight intensity={ 1.5 } />

        <EffectComposer autoClear={false}>
        </EffectComposer>


            <Physics debug={ false } gravity={ [ 0, - 9.08, 0 ] }>

                <Scroll>

                <Center position={[viewport.width/-4.15,2,0]} >
                    <Text3D ref={textRef1} font='fonts/Rounded.json' bevelEnabled letterSpacing={-0.07} size={0.6}> 
                        Noé Chouteau
                        <textMaterial></textMaterial>
                    </Text3D>
                </Center>


                <Center position={[viewport.width/-3.25,0.8,0]} >
                    <Text3D ref={textRef2} font='fonts/Rounded.json' bevelEnabled letterSpacing={-0.07} size={0.6}>
                        Portfolio
                        <textMaterial></textMaterial>
                    </Text3D>
                </Center>

                

                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={cloud1ref} object={cloudModel.scene} scale={0.15} position={[1,-2,1]} onClick={() => cloudClick(cloud1ref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={cloud2ref} object={cloudModel2.scene.clone()} scale={0.15} position={[3,-0.5,2]} onClick={() => cloudClick(cloud2ref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={cloud3ref} object={cloudModel.scene.clone()} scale={0.15} position={[2.6,2,-2]} onClick={() => cloudClick(cloud3ref)}
                    onPointerOver={() => document.body.style.cursor = 'pointer'}
                    onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>
                
                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={cloud4ref} object={cloudModel.scene.clone()} scale={0.15} position={[7,1,-0.7]} onClick={() => cloudClick(cloud4ref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={cloud5ref} object={cloudModel2.scene.clone()} scale={0.15} position={[7,-1.2,0.3]} onClick={() => cloudClick(cloud5ref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={cloud6ref} object={cloudModel3.scene.clone()} scale={0.15} position={[5.3,0,-3]} onClick={() => cloudClick(cloud6ref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>



                <Float speed={5} rotationIntensity={0}>
                    <primitive ref={baliseRef} object={baliseModel.scene} scale={0.15} position={[12,-2,-1]} onClick={() => cloudClick(baliseRef)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={4} rotationIntensity={0}>
                    <primitive ref={cloudBowlref} object={cloudBowlModel.scene} scale={0.1} position={[15,-1.3,-1]} onClick={() => cloudClick(cloudBowlref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={3} rotationIntensity={0}>
                    <primitive ref={cloudPortalref} object={cloudPortalModel.scene} scale={0.1} position={[19,-1.3,-1]} onClick={() => cloudClick(cloudPortalref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={4.5} rotationIntensity={0}>
                    <primitive ref={cloudBlobref} object={cloudBlobModel.scene} scale={0.1} position={[23,-1.3,-1]} onClick={() => cloudClick(cloudBlobref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>

                <Float speed={4.5} rotationIntensity={0}>
                    <primitive ref={cloudTrainref} object={cloudTrainModel.scene} scale={0.1} position={[27,-1.3,-1]} onClick={() => cloudClick(cloudTrainref)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    >
                    </primitive>
                </Float>


                <Float speed={12} rotationIntensity={0} floatIntensity={0.1}>
                    <primitive ref={planeRef} object={planeModel.scene} scale={0.2} position={[-9,-1,0]} rotation={[0,0,0]}
                    ></primitive>
                </Float>

                </Scroll>

            </Physics>

    </>
}