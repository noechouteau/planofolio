import React from 'react'
import { Text, useGLTF, Outlines, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'

import Cloud from './Cloud'

export default function Portal(props) {
    
    const globalwidth = useThree((state) => state.viewport.width)

    const portalcloudModel = useGLTF('models/cloud.glb')
    const portalcloudModel2 = useGLTF('models/cloud2.glb')
    const portalcloudModel3 = useGLTF('models/cloud3.glb')
    const htmlCloudP = useGLTF('models/htmlCloud.glb')
    const cssCloudP = useGLTF('models/cssCloud.glb')
    const jsCloudP = useGLTF('models/jsCloud.glb')
    const glslCloudP = useGLTF('models/glslCloud.glb')
    const threeCloudP = useGLTF('models/threeCloud.glb')
    const blenderCloudP = useGLTF('models/blenderCloud.glb')
    const { nodes, materials } = useGLTF('models/cloudArrow.glb')
    
    const portalcloud1ref = useRef()
    const portalcloud2ref = useRef()
    const portalcloud3ref = useRef()

    const htmlCloudRefP = useRef()
    const cssCloudRefP = useRef()
    const jsCloudRefP = useRef()
    const glslCloudRefP = useRef()
    const threeCloudRefP = useRef()
    const cloudArrowRefP = useRef()
    const blenderCloudRefP = useRef()

    const arrowClick = () => {
        props.onArrowClicked(1.95, props.oldScale, props.backPosition)
    }

    return (<>

    <Cloud cloudRef={portalcloud1ref} position={[globalwidth*2.37,12,0.3]} tdmodel={portalcloudModel2} />
    <Cloud cloudRef={portalcloud2ref} position={[globalwidth*2.38,7.6,1]} tdmodel={portalcloudModel3} />
    <mesh position={[globalwidth*1.64,8.3,2]}>
        <ringGeometry args={[0.6,0.7,32]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Cloud cloudRef={portalcloud3ref} position={[globalwidth*1.6,11.8,2]} tdmodel={portalcloudModel} />

    <Cloud cloudRef={htmlCloudRefP} position={[globalwidth*1.63,10.5,0.75]} tdmodel={htmlCloudP} rotation={[-0.2,0.5,0.3]}/>
    <Cloud cloudRef={cssCloudRefP} position={[globalwidth*1.83,11.5,-3]} tdmodel={cssCloudP} rotation={[0.2,-0.1,-0.2]}  />
    <Cloud cloudRef={jsCloudRefP} position={[globalwidth*1.7,11.5,-1.8]} tdmodel={jsCloudP} rotation={[0.1,0.6,0.3]} />
    <Cloud cloudRef={glslCloudRefP} position={[globalwidth*1.93,8,0.1]} tdmodel={glslCloudP} rotation={[-0.5,-0.1,-0.01]}/>
    <Cloud cloudRef={threeCloudRefP} position={[globalwidth*1.6,9.5,0.6]} tdmodel={threeCloudP} rotation={[-0.2,0.8,0.01]} />
    <Cloud cloudRef={blenderCloudRefP} position={[globalwidth*1.74,8.,0.4]} tdmodel={blenderCloudP} rotation={[0.,0.3,0.1]} />

    <mesh ref={cloudArrowRefP} geometry={nodes.arrow.geometry} material={materials['Material.001']} position={[globalwidth*1.642,8.4,2]} scale={0.13} rotation={[0.0,0.5,-0.9]}  
        onPointerOver={()=>{document.body.style.cursor = "pointer"}}
        onPointerOut={()=>{document.body.style.cursor = "auto"}}
        onClick={arrowClick}
    >
        <Outlines thickness={0.5} angle={0} color={"#3A9DFF"}/>
    </mesh>

    {/* <Cloud cloudRef={cloudArrowRef} position={[globalwidth*1.3,7.,-1]} tdmodel={cloudArrow}  /> */}

    <Text fontSize={globalwidth*0.08} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth*1.95, 12.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"#3A9DFF"}>
        PURTAL
    </Text>
    <mesh position={[globalwidth * 2.24, 11.42, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.2]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.24, 11.4, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Pour ce projet, l'idée m'est venue après avoir terminé la partie "Portail" de la formation Three.JS Journey. À la fin de ce chapitre, j'avais acquis les compétences pour maîtriser le baking et créer une scène simple de portail. Cependant, j'ai voulu pousser plus loin et concevoir un monde visible uniquement à travers ce portail, tout en agrandissant celui qui serait déjà visible.    </Text>

    <mesh position={[globalwidth * 2.27, 10, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.4]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.27, 10, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Dans cette application, l'utilisateur peut observer la scène en ajustant l'angle de vue. En maintenant le clic gauche enfoncé, une animation se déclenche sur le portail, faisant disparaître le shader pour révéler une autre scène. Ce projet m'a demandé du temps, car j'ai créé tous les modèles 3D moi-même : je voulais vraiment progresser dans ce domaine et ce projet a été très instructif à cet égard. J'ai utilisé la technique de baking sur tous les modèles 3D, ce qui a également contribué à la durée du projet.    </Text>

    <mesh position={[globalwidth * 2.24, 8.6, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.1]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>

    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.24, 8.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Pour le portail, j'ai employé deux shaders distincts : un pour le visuel lorsque le portail est "fermé", et un autre pour afficher l'autre scène lorsque l'utilisateur wamaintient le clic. Cette fonctionnalité m'a également permis de me familiariser avec les notions de Layers dans Three.JS pour définir les éléments à l'intérieur et à l'extérieur du portail.    </Text>
    <mesh position={[globalwidth * 2.27, 7.6, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 0.7]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
        <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.27, 7.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
        Enfin, j’ai tenu à laisser le panneau de configuration de lil.gui pour permettre à l’utilisateur de modifier les couleurs du portail et du ciel à sa guise.        </Text>
        
    </>)
}
