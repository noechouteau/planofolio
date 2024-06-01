import React from 'react'
import { Text, useGLTF, Outlines, Float, RoundedBox } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'

import Cloud from './Cloud'

export default function Train(props) {
    
    const globalwidth = useThree((state) => state.viewport.width)

    const traincloudModel = useGLTF('models/cloud.glb')
    const traincloudModel2 = useGLTF('models/cloud2.glb')
    const traincloudModel3 = useGLTF('models/cloud3.glb')
    const htmlCloudT = useGLTF('models/htmlCloud.glb')
    const cssCloudT = useGLTF('models/cssCloud.glb')
    const jsCloudT = useGLTF('models/jsCloud.glb')
    const glslCloudT = useGLTF('models/glslCloud.glb')
    const threeCloudT = useGLTF('models/threeCloud.glb')
    const blenderCloudT = useGLTF('models/blenderCloud.glb')
    const cloudArrowP = useGLTF('models/cloudArrow.glb')
    const { nodes, materials } = useGLTF('models/cloudArrow.glb')
    
    const traincloud1ref = useRef()
    const traincloud2ref = useRef()
    const traincloud3ref = useRef()

    const htmlCloudRefT = useRef()
    const cssCloudRefT = useRef()
    const jsCloudRefT = useRef()
    const glslCloudRefT = useRef()
    const threeCloudRefT = useRef()
    const blenderCloudRefT = useRef()
    const cloudArrowRefT = useRef()

    const arrowClick = () => {
        props.onArrowClicked(3.06, props.oldScale, props.backPosition)
    }

    return (<>

    <Cloud cloudRef={traincloud1ref} position={[globalwidth*3.46,12.2,0.3]} tdmodel={traincloudModel2} />
    <Cloud cloudRef={traincloud2ref} position={[globalwidth*3.45,7.6,1]} tdmodel={traincloudModel3} />
    <mesh position={[globalwidth*2.72,8.3,2]}>
        <ringGeometry args={[0.6,0.7,32]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh>
    <Cloud cloudRef={traincloud3ref} position={[globalwidth*2.7,11.8,2]} tdmodel={traincloudModel} />

    <Cloud cloudRef={htmlCloudRefT} position={[globalwidth*2.63,10.7,-1]} tdmodel={htmlCloudT} rotation={[-0.1,0.6,0.]}/>
    <Cloud cloudRef={cssCloudRefT} position={[globalwidth*2.95,11.5,-3]} tdmodel={cssCloudT} rotation={[0.2,-0.1,-0.2]}  />
    <Cloud cloudRef={jsCloudRefT} position={[globalwidth*2.75,11.7,-1.8]} tdmodel={jsCloudT} rotation={[0.1,0.6,0.3]} />
    <Cloud cloudRef={glslCloudRefT} position={[globalwidth*3.,7.8,0.1]} tdmodel={glslCloudT} rotation={[-0.5,-0.1,-0.01]}/>
    <Cloud cloudRef={threeCloudRefT} position={[globalwidth*2.6,9.5,-0.5]} tdmodel={threeCloudT} rotation={[-0.2,0.8,-0.05]} />
    <Cloud cloudRef={blenderCloudRefT} position={[globalwidth*2.8,8.1,0.7]} tdmodel={blenderCloudT} rotation={[-0.2,0.6,0.01]} />

    <mesh ref={cloudArrowRefT} geometry={nodes.arrow.geometry} material={materials['Material.001']} position={[globalwidth*2.722,8.4,2]} scale={0.13} rotation={[0.0,0.5,-0.9]}   
        onPointerOver={()=>{document.body.style.cursor = "pointer"}}
        onPointerOut={()=>{document.body.style.cursor = "auto"}}
        onClick={arrowClick}
    >
        <Outlines thickness={0.5} angle={0} color={"#3A9DFF"}/>
    </mesh>

    <Text fontSize={globalwidth*0.08} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth*3.06, 12.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"#3A9DFF"}>
        TRAIN
    </Text>

    <RoundedBox position={[globalwidth * 3.32, 11.2, -1]} radius={0.1} args={[globalwidth*0.49, 1.4,0.1]} bevelSegments={0} >
        <meshBasicMaterial color={"#3A9DFF"} />
    </RoundedBox>

    {/* <mesh position={[globalwidth * 3.32, 11.2, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.4]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh> */}

    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 3.32, 11.2, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Le projet "Train Journey" représente mon premier vrai travail autonome. Mon objectif principal était d'améliorer mes compétences en modélisation 3D et surtout en programmation de shaders. L'idée était de créer une expérience où l'utilisateur pourrait voyager à travers différents paysages abstraits, tout en conservant un élément constant pour maintenir une certaine cohérence. C'est ainsi que l'idée d'une locomotive miniature est née.     </Text>

    <RoundedBox position={[globalwidth * 3.35, 9.6, -1]} radius={0.1} args={[globalwidth*0.49, 1.2,0.1]} bevelSegments={0} >
        <meshBasicMaterial color={"#3A9DFF"} />
    </RoundedBox>

    {/* <mesh position={[globalwidth * 3.35, 10, -1]} rotation={[0, 0, 0]} >
        <planeGeometry args={[globalwidth*0.49, 1.2]} />
        <meshBasicMaterial color={"#3A9DFF"} />
    </mesh> */}
    
    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 3.35, 9.6, -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Dans cette application, l'utilisateur peut naviguer entre six biomes distincts en cliquant sur l'icône de la locomotive. De plus, il a la liberté de modifier l'angle de vue à sa guise pour observer la scène de différentes manières. J'ai entièrement conçu ces environnements en utilisant GLSL, tandis que j’ai modélisé la locomotive dans Blender en m'inspirant d'une image que j'ai trouvée esthétique.     </Text>

    <RoundedBox position={[globalwidth * 3.32, 8., -1]} radius={0.1} args={[globalwidth*0.49, 1.4,0.1]} bevelSegments={0} >
        <meshBasicMaterial color={"#3A9DFF"} />
    </RoundedBox>

    <Text textAlign={"justify"} fontSize={globalwidth*0.012} maxWidth={globalwidth*0.47} opacity={1} position={[globalwidth * 3.32, 8., -1]} rotation={[0, 0, 0]} font={"/fonts/MPLUSRounded1c-Black.ttf"} color={"white"}>
    Enfin, j'ai jugé pertinent d'intégrer un mode "music visualizer", étant donné que les paysages et les shaders s'y prêtaient parfaitement. Ainsi, l'utilisateur a la possibilité d'importer sa propre musique au format MP3 et d'observer les   wpaysages réagir en temps réel aux variations sonores. Pour cela, j'ai exploité wwles   fonctionnalités de la classe Audio de Three.JS, qui permettent de wrécupérer les fréquences sonores à chaque cycle. J’ai alors pu adapter les shaders en conséquence.    </Text>
    </>)
}
