import React from 'react'
import { Text, useGLTF, Outlines, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'

import Cloud from './Cloud'

export default function Blob(props) {
    
    const globalwidth = useThree((state) => state.viewport.width)

    const blobcloudModel = useGLTF('models/cloud.glb')
    const blobcloudModel2 = useGLTF('models/cloud2.glb')
    const blobcloudModel3 = useGLTF('models/cloud3.glb')
    const htmlCloudB = useGLTF('models/htmlCloud.glb')
    const cssCloudB = useGLTF('models/cssCloud.glb')
    const jsCloudB = useGLTF('models/jsCloud.glb')
    const glslCloudB = useGLTF('models/glslCloud.glb')
    const threeCloudB = useGLTF('models/threeCloud.glb')

    const { nodes, materials } = useGLTF('models/cloudArrow.glb')
    
    const blobcloud1ref = useRef()
    const blobcloud2ref = useRef()
    const blobcloud3ref = useRef()

    const htmlCloudRefB = useRef()
    const cssCloudRefB = useRef()
    const jsCloudRefB = useRef()
    const glslCloudRefB = useRef()
    const threeCloudRefB = useRef()
    const cloudArrowRefB = useRef()

    const arrowClick = () => {
        props.onArrowClicked(2.57, props.oldScale, props.backPosition)
    }

    return (<>

    <Cloud cloudRef={blobcloud1ref} position={[globalwidth*2.96,12.2,0.3]} tdmodel={blobcloudModel2} />
    <Cloud cloudRef={blobcloud2ref} position={[globalwidth*2.95,7.6,1]} tdmodel={blobcloudModel3} />
    <mesh position={[globalwidth*2.241,8.3,2]}>
        <ringGeometry args={[0.6,0.7,32]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Cloud cloudRef={blobcloud3ref} position={[globalwidth*2.2,11.8,2]} tdmodel={blobcloudModel} />

    <Cloud cloudRef={htmlCloudRefB} position={[globalwidth*2.15,11.3,0]} tdmodel={htmlCloudB} rotation={[0.5,0.8,0.]}/>
    <Cloud cloudRef={cssCloudRefB} position={[globalwidth*2.43,11.5,-3]} tdmodel={cssCloudB} rotation={[0.2,-0.1,-0.2]}  />
    <Cloud cloudRef={jsCloudRefB} position={[globalwidth*2.3,11.5,-1.8]} tdmodel={jsCloudB} rotation={[0.1,0.6,0.3]} />
    <Cloud cloudRef={glslCloudRefB} position={[globalwidth*2.53,8,0.1]} tdmodel={glslCloudB} rotation={[-0.5,-0.1,-0.01]}/>
    <Cloud cloudRef={threeCloudRefB} position={[globalwidth*2.2,9.5,0.6]} tdmodel={threeCloudB} rotation={[-0.2,0.8,0.01]} />

    <mesh ref={cloudArrowRefB} geometry={nodes.arrow.geometry} material={materials['Material.001']} position={[globalwidth*2.115,7.4,0]} scale={0.1} rotation={[-0.1,0.6,0]} 
        onPointerOver={()=>{document.body.style.cursor = "pointer"}}
        onPointerOut={()=>{document.body.style.cursor = "auto"}}
        onClick={arrowClick}
    >
        <Outlines thickness={0.5} angle={0} color={"#3A9DFF"}/>
    </mesh>

    <Text fontSize={globalwidth*0.08} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth*2.58, 12.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"#3A9DFF"}>
        BLOB
    </Text>
    <mesh position={[globalwidth * 2.85, 11.42, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.1]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.85, 11.4, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Ce projet a émergé de mon désir de créer un nouveau "music visualizer" personnalisable pour les utilisateurs, offrant ainsi une expérience unique à chacun. L'objectif principal était de permettre à n'importe qui de concevoir des visuels captivants en synchronisation avec n'importe quelle musique.    </Text>

    <mesh position={[globalwidth * 2.87, 10.1, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.2]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.87, 10.1, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Pour la forme de base, j'ai opté pour un "blob". Cette forme organique est à la fois esthétique et bien adaptée aux shaders. J'ai ensuite entrepris de développer mes shaders pour qu'ils réagissent de manière dynamique aux différentes fréquences sonores. J’ai également ajouté la possibilité de modifier certains paramètres visuels (couleurs, bloom,...) via lil.gui pour les utilisateurs.
    </Text>

    <mesh position={[globalwidth * 2.85, 8.78, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.1]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>

    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.85, 8.78, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Enfin, pour enrichir l'expérience utilisateur, j'ai ajouté une fonctionnalité permettant aux utilisateurs de télécharger leurs propres fichiers MP3 sur le site. Cela leur offre la possibilité d'explorer le visualizer avec leur propre musique, implémentant ainsi la dimension personnalisée à l'expérience globale.    </Text>
    <mesh position={[globalwidth * 2.87, 7.6, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
        <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 2.87, 7.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
        Ce projet m'a apporté une meilleure compréhension de la manipulation des objets 3D. En effet, jusqu'à présent, je n'avais jamais travaillé sur des shaders appliqués à des objets autres que des plans, du moins pas de manière personnelle. De plus, il m'a également permis de consolider mes compétences dans la gestion des sons.        
        </Text>
        
    </>)
}
