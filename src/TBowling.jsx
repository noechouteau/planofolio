import React from 'react'
import { Text, useGLTF, Outlines, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'

import Cloud from './Cloud'

export default function TBowling(props) {
    
    const globalwidth= useThree((state) => state.viewport.width)

    const bowlcloudModel = useGLTF('models/cloud.glb')
    const bowlcloudModel2 = useGLTF('models/cloud2.glb')
    const bowlcloudModel3 = useGLTF('models/cloud3.glb')
    const htmlCloud = useGLTF('models/htmlCloud.glb')
    const cssCloud = useGLTF('models/cssCloud.glb')
    const jsCloud = useGLTF('models/jsCloud.glb')
    const glslCloud = useGLTF('models/glslCloud.glb')
    const threeCloud = useGLTF('models/threeCloud.glb')
    const { nodes, materials } = useGLTF('models/cloudArrow.glb')
    
    const bowlcloud1ref = useRef()
    const bowlcloud2ref = useRef()
    const bowlcloud3ref = useRef()

    const htmlCloudRef = useRef()
    const cssCloudRef = useRef()
    const jsCloudRef = useRef()
    const glslCloudRef = useRef()
    const threeCloudRef = useRef()
    const cloudArrowRef = useRef()

    const arrowClick = () => {
        props.onArrowClicked(1.33,props.oldScale, props.backPosition)
    }

    return (<group>

    <Cloud cloudRef={bowlcloud1ref} position={[globalwidth*0.95,12,0.3]} tdmodel={bowlcloudModel2} />
    <Cloud cloudRef={bowlcloud2ref} position={[globalwidth*1.68,7.6,1]} tdmodel={bowlcloudModel3} />
    <mesh position={[globalwidth*0.96,8.3,2]}>
        <ringGeometry args={[0.6,0.7,32]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Cloud cloudRef={bowlcloud3ref} position={[globalwidth*1.6,11.8,2]} tdmodel={bowlcloudModel} />

    <Cloud cloudRef={htmlCloudRef} position={[globalwidth*0.8,10.8,-1.8]} tdmodel={htmlCloud} rotation={[-0.2,0.5,0.3]}/>
    <Cloud cloudRef={cssCloudRef} position={[globalwidth*1.1,11.5,-3]} tdmodel={cssCloud} rotation={[0.2,-0.1,-0.2]}  />
    <Cloud cloudRef={jsCloudRef} position={[globalwidth*1,11.5,-1]} tdmodel={jsCloud} rotation={[0.2,0.4,0]} />
    <Cloud cloudRef={glslCloudRef} position={[globalwidth*1.20,7.5,-1]} tdmodel={glslCloud} rotation={[-0.5,-0.1,-0.01]}/>
    <Cloud cloudRef={threeCloudRef} position={[globalwidth*0.9,9,-0.3]} tdmodel={threeCloud} rotation={[-0.2,0.7,0.01]} />

    <mesh ref={cloudArrowRef} geometry={nodes.arrow.geometry} material={materials['Material.001']} position={[globalwidth*0.96,8.4,2]} scale={0.13} rotation={[0.0,0.5,-0.9]} 
        onPointerOver={()=>{document.body.style.cursor = "pointer"}}
        onPointerOut={()=>{document.body.style.cursor = "auto"}}
        onClick={arrowClick}
    >
        <Outlines thickness={0.5} angle={0} color={"#3A9DFF"}/>
    </mesh>

    <Text fontSize={globalwidth*0.08} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth*1.3, 12.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"#3A9DFF"}>
        TBOWLING
    </Text>
    <mesh position={[globalwidth * 1.56, 11.42, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 0.9]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 1.56, 11.4, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
        À l'origine, mon objectif était, avec ce projet, de renforcer mes compétences en matière de gestion de la physique dans les jeux. De plus, je cherchais à créer un jeu relativement simple, et j'ai donc opté pour un jeu de bowling.
    </Text>

    <mesh position={[globalwidth * 1.59, 10.27, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.2]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 1.59, 10.28, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
            Pour la physique du jeu, j'ai choisi d'utiliser Cannon.js, car j'avais déjà une certaine familiarité avec cette bibliothèque grâce à la formation "Three Journey". J'ai donc défini des "bodies" pour chacune des quilles, la boule et le terrain. Pour le système de comptage des points, j'ai décidé de surveiller la coordonnée "y" de chaque quille après un laps de temps défini pour déterminer si elles étaient tombées.
    </Text>

    <mesh position={[globalwidth * 1.56, 8.94, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.3]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>

    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 1.56, 8.93, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
            J'ai également consacré du temps à ajouter tous les éléments nécessaires autour du jeu, tels qu'une musique d'ambiance, des menus, un système de saisie des noms, un tableau des scores, une animation pour les strikes/spares... Ce projet m'a vraiment permis de générer de nouvelles idées, même si je ne me suis pas concentré sur la modélisation 3D. En effet, l'objectif n'était pas de perfectionner mes compétences en modélisation, donc j'ai simplement utilisé des objets préexistants et gratuits.
    </Text>
    <mesh position={[globalwidth * 1.59, 7.7, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
        <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 1.59, 7.7, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
            Enfin, j'ai pensé qu'il serait amusant d'ajouter des fonctionnalités de "highscore" et de jeu à deux joueurs, alors j'ai implémenté ces options. Pour le mode deux joueurs, j'ai adopté une approche similaire, et pour le highscore, j'ai utilisé le “localStorage”.
        </Text>
        
    </group>)
}
