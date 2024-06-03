import React, { useEffect } from 'react'
import { useProgress } from '@react-three/drei'
import { useState } from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen({ start, onStarted}) {
    const { active, progress, errors, item, loaded, total } = useProgress()
    
    const divRef = useRef()
    const starttextRef = useRef()
    useEffect(() => {
    }, [progress])

    if(total == 50){
        setTimeout(() => {
            starttextRef.current.style.opacity = 1
            divRef.current.style.cursor = "pointer"
            console.log(start)
            divRef.current.addEventListener('click', () => {
                onStarted()
                console.log(divRef.current.children)
                for(let child of divRef.current.children){
                    gsap.to(child, {duration: 0.5, top: -200, ease: 'ease.out'})
                }
                gsap.to(divRef.current, {duration: 1, opacity: 0, ease: 'ease.out'}).delay(0.5)
                setTimeout(() => {
                    divRef.current.style.display = 'none'
                }, 2100)
            })
        },600)
    }


    return (
        <div className={`loadingScreen`} ref={divRef}>
            <div className="loadingScreen__progress">
                <div
                    className="loadingScreen__progress__value"
                    style={{ width: `${total*2}%` }}
                ></div>
            </div>

            <div className="loadingScreen__board">
                <h1 className="loadingScreen__title">{`${total*2}%`}</h1>
                <p>Attention ! Cette expérience comporte des éléments sonores. <br></br>Mettez des écouteurs pour en profiter pleinement  :)</p>
            </div>
            <p className="loadingScreen__start" ref={starttextRef}>Cliquez n'importe où pour commencer.</p>
        </div>
    )
}
