import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { ScrollControls } from '@react-three/drei'
import { useEffect, useState } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))


export default function App() {
    console.log(window.innerWidth)

    useEffect(()=>{
        console.log(window.innerWidth)
    },[window.innerWidth])

    return (
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0,0,7 ],
            } }
        >
            <ScrollControls horizontal damping={0.25} pages={5} distance={1}>
                <Experience />
            </ScrollControls>
        </Canvas>
    )
}


root.render(
    <App />
)