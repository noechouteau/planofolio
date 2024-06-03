import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Loader, ScrollControls } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))


export default function App() {
    console.log(window.innerWidth)

    useEffect(()=>{
        console.log(window.innerWidth)
    },[window.innerWidth])

    const [start, setStart] = useState(false)

    return (
        <>
            <Canvas
                shadows
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 5000,
                    position: [ 0,0,7 ],
                } }
            >
                <Suspense fallback={null}> 

                <ScrollControls horizontal damping={0.25} pages={5} distance={1}>
                    <Experience started={start} />
                </ScrollControls>

                </Suspense>
            </Canvas>
            <LoadingScreen start={start} onStarted={()=>setStart(true)}/>
        </>
    )
}


root.render(
    <App />
)