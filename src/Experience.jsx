import { Stars,useGLTF, OrbitControls, useScroll, Scroll, Text, Float, Center, Text3D, useHelper, Html, useCursor, Image } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { InstancedRigidBodies, CylinderCollider, BallCollider, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useMemo, useEffect, useState, useRef } from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { Outline, EffectComposer} from '@react-three/postprocessing'
import * as THREE from 'three'


import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'

import { BlendFunction } from 'postprocessing'
import { gsap } from "gsap";

import Island from './Island'
import TBowling from './TBowling'
import Cloud from './Cloud'
import Portal from './Portal'
import Blob from './Blob'
import Train from './Train'

export default function Experience()
{
    const globalwidth  = useThree((state) => state.viewport.width)
    const globalheight = useThree((state) => state.viewport.height)
    const camera = useThree((state) => state.camera)

    camera.position.set(0,0,7)
    let scroll = useScroll()
    const textRef1 = useRef()
    const textRef2 = useRef()
    let [theme, setTheme] = useState('matinée')

    const txtNoe = useGLTF('models/txtNoe.glb')
    const txtPorto = useGLTF('models/txtPorto.glb')
    const cloudModel = useGLTF('models/cloud.glb')
    const cloudModel2 = useGLTF('models/cloud2.glb')
    const cloudModel3 = useGLTF('models/cloud3.glb')
    const planeModel = useGLTF('models/plane.glb')
    const cloudBowlModel = useGLTF('models/cloudBowl.glb')
    const baliseModel = useGLTF('models/balise.glb')
    const balise2Model = useGLTF('models/balise2.glb')
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

    const mailRef = useRef()
    const linkedinRef = useRef()
    const themeImRef = useRef()

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
    const balise2Ref = useRef()
    const cloudBowlref = useRef()
    const cloudPortalref = useRef()
    const cloudBlobref = useRef()
    const cloudTrainref = useRef()
    let [startAnimFinished, setStartAnimFinished] = useState(false)


    useEffect(() => {
        let root = document.querySelector("#root")
        const actualTime = new Date()

        if(actualTime.getHours() >= 8 && actualTime.getHours() < 12){
            setTheme('matinée')
            root.classList.remove(root.classList[0])
            root.classList.add('matinée')
        }
        else if(actualTime.getHours() >= 12 && actualTime.getHours() < 19){
            setTheme('aprem')
            root.classList.remove(root.classList[0])
            root.classList.add('aprem')
        }
        else if(actualTime.getHours() >= 19 && actualTime.getHours() < 20){
            setTheme('crépuscule')
            root.classList.remove(root.classList[0])
            root.classList.add('crépuscule')
            
        }
        else if(actualTime.getHours() >= 4 && actualTime.getHours() < 8){
            setTheme('aurore')
            root.classList.remove(root.classList[0])
            root.classList.add('aurore')
        }
        else {
            setTheme('nuit')
        }
        

        gsap.to(planeRef.current.position,{
            x: 0,
            duration: 2.5,
            ease: 'ease.out'
        }
        ).then(()=>{
            let div= root.children[0].children[0].children[1]
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
    let [offsetState, setOffsetState] = useState(0)
    let [currentRef, setCurrentRef] = useState(null)
    let [backFromArrow, setBackFromArrow] = useState(false)
    let [oldPosition, setOldPosition] = useState(0)
    let [topPosition, setTopPosition] = useState(0)
    let [topScale, setTopScale] = useState(0)
    let [oldScale, setOldScale] = useState(0)
    let [backPosition, setBackPosition] = useState(0)

    const handleInfoClicked = (offset, ref, topPos, topScale) => {
        setOffsetState(offset)
        setCurrentRef(ref.current)
        setTopPosition(topPos)
        setTopScale(topScale)
    }

    const handleArrowClicked = (oldPosition, oldScale, backPosition) => {
        setBackFromArrow(true)
        setOldPosition(oldPosition)
        setOldScale(oldScale)
        setBackPosition(backPosition)
    }

    const homeImageOver = (passedImageRef) => {
        gsap.to(passedImageRef.current.material, {duration: 0.5, opacity:1.0, ease: 'ease.out'})
        document.body.style.cursor = 'pointer'
    }

    const homeImageOut = (passedImageRef) => {
        gsap.to(passedImageRef.current.material, {duration: 0.5, opacity:0.5, ease: 'ease.out'})
        document.body.style.cursor = 'auto'
    }


    // useHelper(light1, THREE.DirectionalLightHelper,1, 'white')
    // useHelper(light2, THREE.DirectionalLightHelper,1, 'black')

    useFrame((state, delta) =>
    {
        console.log(topPosition)
        if (backFromArrow){
            gsap.to(currentRef.position, {duration: 2,x:globalwidth*oldPosition, y: -0.3, ease: 'expo.out'})
            gsap.to(currentRef.rotation, {duration: 2,x:0, y: 0, ease: 'expo.out'})
            gsap.to(scroll, {offset: offsetState, duration: 2, ease: 'power3.out'}).then(()=> scroll.el.scrollLeft = globalwidth*1.33*backPosition)
            gsap.to(currentRef.scale, {duration: 2,x:oldScale, y: oldScale,z:oldScale, ease: 'expo.out'})
            gsap.to(camera.position, {y:0, duration: 2, ease: 'power3.out'})
            setBackFromArrow(false)
            setOffsetState(0)
            setCurrentRef(null)
            setOldPosition(0)
        } 
        else if(offsetState > 0){
            scroll.offset = offsetState
            gsap.to(currentRef.position, {duration: 2,x:globalwidth*topPosition, y: 9, ease: 'expo.out'})
            gsap.to(currentRef.rotation, {duration: 2,x:0, y: 0.7, ease: 'expo.out'})
            gsap.to(currentRef.scale, {duration: 2,x:topScale, y: topScale,z:topScale, ease: 'expo.out'})
            gsap.to(scroll, {offset: offsetState, duration: 2, ease: 'power3.out'})
            gsap.to(camera.position, {y:10, duration: 2, ease: 'power3.out'})
        } 
        else {
            const c1 = scroll.curve(0, 1.1/10)
            const c2 = scroll.curve(1.1/10, 1.2/10)
            const c3 = scroll.curve(3.9/10, 7.6/40)
            const c4 = scroll.curve(5./10, 4/40)
            const c5 = scroll.curve(3.9/10, 1.5/40)
            
            const r1 = scroll.range(1.1/10, 1.2/10)
            const r2 = scroll.range(1.2/10, 6/10)
            const r3 = scroll.range(6/10, 7/10)
            const time = state.clock.getElapsedTime()

            if(!startAnimFinished) return
            planeRef.current.position.x = scroll.offset  * globalwidth *4
            planeRef.current.position.z = -c1 -c3*10
            planeRef.current.rotation.z = c2/2 + c4*0.9 -c5*0.5
            planeRef.current.position.y = r1*2-1

            planeRef.current.rotation.x = c1 -c2/2 + r2*1.3 - r3

            if(scroll.delta > 0.01){
                document.body.style.cursor = 'auto'
            }
            // planeRef.current.position.x += 0.02
            // planeRef.current.rotation.x += 0.002
        }
    })


    return <>

        {/* <Perf position="top-left" /> */}

        {/* <OrbitControls></OrbitControls> */}

        {theme === 'aprem' ?
        <>
            <directionalLight position={[ 5, 4.5, -2]} intensity={ 5. } ref={light1} color="rgb(155,155,155)" />
            <directionalLight position={[ 0, 0, 5 ]} intensity={ 8. } ref={light2} color="rgb(84,106,255)" /> 
            <ambientLight intensity={ 1.5 }/>
        </>
        :null}

        {theme === 'matinée' ?
        <>
        <directionalLight position={[ 5, 4.5, 1]} intensity={ 8. } ref={light1} color="#E77E1D" />
        <directionalLight position={[ 0, 0, 5 ]} intensity={ 3. } ref={light2} color="rgb(53,34,122)" />
        <ambientLight intensity={ 8.5 } color="rgb(33,37,104)"/>
        <ambientLight intensity={ 1.5 }/>
        </>
        :null}

        {theme === 'aurore' ?
        <>
        <directionalLight position={[ 5, 4.5, 1]} intensity={ 8. } ref={light1} color="#E77E1D" />
        <directionalLight position={[ 0, 0, 5 ]} intensity={ 3. } ref={light2} color="rgb(53,34,122)" />
        <ambientLight intensity={ 8.5 } color="rgb(33,37,104)"/>
        <ambientLight intensity={ 0.5 }/>
        </>
        :null}

        {theme === 'crépuscule' ?
        <>
        <directionalLight position={[ 5, 4.5, 3]} intensity={ 6. } ref={light1} color="#FF5F25" />
        <directionalLight position={[ -3, -2, 2 ]} intensity={ 6. } ref={light2} color="rgb(33,37,104)" />
        <ambientLight intensity={ 0.5 }/>
        </>
        :null}

        {theme === 'nuit' ?
                <>
                <Stars radius={90} depth={1} count={5000} factor={4} saturation={0} fade speed={1} />
                <directionalLight position={[ 5, 4.5, -2]} intensity={ 5. } ref={light1} color="rgb(155,155,155)" />
                <directionalLight position={[ 0, 0, 5 ]} intensity={ 8. } ref={light2} color="rgb(84,106,255)" /> 
                </>
                
        :null}


        <EffectComposer autoClear={false}>
        </EffectComposer>

        <Image ref={mailRef} url="/mail.png" transparent opacity={0.5} scale={globalwidth*0.035} position={[globalwidth*-0.231, -1.3, 3]} onPointerOver={homeImageOver.bind(this, mailRef)} onPointerOut={homeImageOut.bind(this, mailRef)}
                onClick={()=>{
                    window.open('mailto:noe.chouteau@gmail.com')
                }}
                >
                </Image>
                <Image ref={linkedinRef} url="/linkedin.png" transparent opacity={0.5} scale={globalwidth*0.035} position={[globalwidth*-0.188, -1.3, 3]} onPointerOver={homeImageOver.bind(this, linkedinRef)} onPointerOut={homeImageOut.bind(this, linkedinRef)}
                onClick={()=>{
                    window.open('https://www.linkedin.com/in/no%C3%A9-chouteau-422b2b222/')
                }}
                ></Image>
                
                <Image ref={themeImRef} url={"/" + theme + ".png"} transparent opacity={0.5} scale={globalwidth*0.035} position={[globalwidth*-0.145, -1.3, 3]} onPointerOver={homeImageOver.bind(this, themeImRef)} onPointerOut={homeImageOut.bind(this, themeImRef)} 
                onClick={()=>{
                    let root = document.querySelector("#root")
                    if(theme === 'matinée'){
                        root.classList.remove(root.classList[0])
                        root.classList.add('aprem')
                        setTheme('aprem')
                    }
                    else if(theme === 'aprem'){
                        root.classList.remove(root.classList[0])
                        root.classList.add('crépuscule')
                        setTheme('crépuscule')
                    }
                    else if(theme === 'crépuscule'){
                        root.classList.remove(root.classList[0])
                        root.classList.add('nuit')
                        setTheme('nuit')
                    }
                    else if(theme === 'nuit'){
                        root.classList.remove(root.classList[0])
                        root.classList.add('aurore')
                        setTheme('aurore')
                    } else {
                        root.classList.remove(root.classList[0])
                        root.classList.add('matinée')
                        setTheme('matinée')
                    }
                }}></Image>

            <Physics debug={ false } gravity={ [ 0, - 9.08, 0 ] }>

                <Scroll width={"100vw"}>

                {topPosition < 1 ?
                <TBowling onArrowClicked={handleArrowClicked} oldScale={globalwidth*0.02} backPosition={117.692}></TBowling>
                : null}

                {topPosition > 1 && topPosition < 2?
                <Portal onArrowClicked={handleArrowClicked} oldScale={globalwidth/65} backPosition={175.692}></Portal>
                : null}

                {topPosition > 2.04 && topPosition < 2.5?
                <Blob onArrowClicked={handleArrowClicked} oldScale={globalwidth/65} backPosition={233.692}></Blob>
                : null}

                {topPosition > 2.5?
                <Train onArrowClicked={handleArrowClicked} oldScale={globalwidth*0.011} backPosition={291.692}></Train>
                : null}

                <Center position={[globalwidth/-4.2,2,0]} scale={globalwidth/22}>
                    <primitive ref={textRef1} object={txtNoe.scene}></primitive>
                </Center>


                <Center position={[globalwidth/-3.36,0.8,0]} scale={globalwidth/22}>
                    <primitive ref={textRef2} object={txtPorto.scene}></primitive>
                </Center>

                

                <Cloud cloudRef={cloud1ref} position={[1,-2,1]} tdmodel={cloudModel} />

                <Cloud cloudRef={cloud2ref} position={[globalwidth*0.23,-0.5,2]} tdmodel={cloudModel2} />

                <Cloud cloudRef={cloud3ref} position={[globalwidth*0.2,2,-2]} tdmodel={cloudModel} />

                <Cloud cloudRef={cloud4ref} position={[globalwidth*0.54,1,-0.7]} tdmodel={cloudModel} />

                <Cloud cloudRef={cloud5ref} position={[globalwidth*0.54,-1.2,0.3]} tdmodel={cloudModel2} />

                <Cloud cloudRef={cloud6ref} position={[globalwidth*0.41,0,-3]} tdmodel={cloudModel3} />

                <Cloud cloudRef={baliseRef} position={[globalwidth*0.93,-2,-1]} tdmodel={baliseModel} />


                <Island planeRef={planeRef} speed={4} imagePosition={[globalwidth*1.33,3,-4]} scaled={globalwidth*0.02} 
                textPosition={[globalwidth*1.30,-2.5,-1.3]} onInfoClicked={handleInfoClicked} infoPos={0.96} infoScale={globalwidth*0.02}
                text="tBowling" scene={cloudBowlModel.scene} position={[globalwidth*1.33,-0.3,-5]} 
                link="https://tbowling.vercel.app" refer={cloudBowlref} infoOffset={0.32}/>

                <Island planeRef={planeRef} speed={3} imagePosition={[globalwidth*1.96,3,-2]} scaled={globalwidth/65} 
                textPosition={[globalwidth*1.95,-1.8,1.2]} onInfoClicked={handleInfoClicked} infoPos={1.75} infoScale={globalwidth/70}
                text="Purtal" scene={cloudPortalModel.scene} position={[globalwidth*1.95,-0.6,-1.7]}
                 link="https://purtal.vercel.app" refer={cloudPortalref} infoOffset={0.49}/>

                <Island planeRef={planeRef} speed={4.5} imagePosition={[globalwidth*2.59,3,-2]} scaled={globalwidth/65}
                textPosition={[globalwidth*2.57,-1.8,1.2]} onInfoClicked={handleInfoClicked} infoPos={2.35} infoScale={globalwidth/70}
                text="Blob" scene={cloudBlobModel.scene} position={[globalwidth*2.57,-0.5,-1.5]}
                link="https://blob-iota-one.vercel.app" refer={cloudBlobref} infoOffset={0.64}/>

                <Island planeRef={planeRef} speed={4.5} imagePosition={[globalwidth*3.06,3,-2]} scaled={globalwidth*0.011}
                textPosition={[globalwidth*3.04,-1.8,1.2]} onInfoClicked={handleInfoClicked} infoPos={2.84} infoScale={globalwidth*0.011}
                text="Train Journey" scene={cloudTrainModel.scene} position={[globalwidth*3.04,-0.5,-1]}
                link="https://train-journey.vercel.app" refer={cloudTrainref} infoOffset={0.76}/>

                <Cloud cloudRef={balise2Ref} position={[globalwidth*3.43,-2,-1]} tdmodel={balise2Model} />



                <Float speed={12} rotationIntensity={0} floatIntensity={0.1}>
                    <primitive ref={planeRef} object={planeModel.scene} scale={globalwidth/65} position={[-9,-1,0]} rotation={[0,0,0]}
                    ></primitive>
                </Float>

                </Scroll>

            </Physics>

    </>
}