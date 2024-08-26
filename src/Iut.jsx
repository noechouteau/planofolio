import { Html } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import sujetRealS1 from "/sujets/sujet_SAE_S1_01.pdf"
import renduRealS1 from "/rendus/sae_c_noe.zip?url"
import sujetRealS2 from "/sujets/sujet_SAE_S2_01.pdf"
import renduRealS2 from "/rendus/rendu_SAE_S2_01.zip?url"
import sujetAdmS1 from "/sujets/sujet_SAE_S1_03.pdf"
import renduAdmS1 from "/rendus/rendu_SAE_S1_03.pdf"
import sujetAdmS2 from "/sujets/sujet_SAE_S2_03.pdf"
import renduAdmS2 from "/rendus/rendu_SAE_S2_03.pdf"
import sujetGerS1 from "/sujets/sujet_SAE_S1_04.pdf"
import renduGerS1 from "/rendus/rendu_SAE_S1_04.pdf"
import sujetGerS2 from "/sujets/sujet_SAE_S2_04.pdf"
import renduGerS2 from "/rendus/rendu_SAE_S2_04.pbix?url"
import sujetConsS1 from "/sujets/sujet_SAE_S1_05.pdf"
import renduConsS1 from "/rendus/rendu_SAE_S1_05.zip?url"
import sujetColS1 from "/sujets/sujet_SAE_S1_06.pdf"
import renduColS1 from "/rendus/rendu_SAE_S1_06.pdf"
import sujetColS2 from "/sujets/sujet_SAE_S2_06.docx?url"
import renduColS2 from "/rendus/rendu_SAE_S2_06.jpg"
import { gsap } from "gsap";

export default function Iut(props){

    let windowRef = useRef()

    React.useEffect(() => {
        if(windowRef.current && props.isVisible) {
            windowRef.current.style.display = "block"
            windowRef.current.style.opacity = 0
            gsap.to(windowRef.current, {opacity: 1, duration: 0.5})
        }

    }, [props.isVisible])


    let [semestre, setSemestre] = React.useState(1)
    let [infoAdditionnelle, setInfoAdditionnelle] = React.useState("")
    let [sujetRealiser, setSujetRealiser] = React.useState(sujetRealS1)
    let [sujetOptimiser, setSujetOptimiser] = React.useState(sujetRealS1)
    let [sujetAdministrer, setSujetAdministrer] = React.useState(sujetAdmS1)
    let [sujetGerer, setSujetGerer] = React.useState(sujetGerS1)
    let [sujetConduire, setSujetConduire] = React.useState(sujetConsS1)
    let [sujetCollaborer, setSujetCollaborer] = React.useState(sujetColS1)
    let [renduRealiser, setRenduRealiser] = React.useState(renduRealS1)
    let [renduOptimiser, setRenduOptimiser] = React.useState(renduRealS1)
    let [renduAdministrer, setRenduAdministrer] = React.useState(renduAdmS1)
    let [renduGerer, setRenduGerer] = React.useState(renduGerS1)
    let [renduConduire, setRenduConduire] = React.useState(renduConsS1)
    let [renduCollaborer, setRenduCollaborer] = React.useState(renduColS1)

    let [texteRealiser, setTexteRealiser] = React.useState("Développer des applications informatiques simples.")
    let [texteOptimiser, setTexteOptimiser] = React.useState("Appréhender et construire des algorithmes.")
    let [texteAdministrer, setTexteAdministrer] = React.useState("Installer et configurer un poste de travail.")
    let [texteGerer, setTexteGerer] = React.useState("Concevoir et mettre en place une base de données à partir d'un cahier des charges client.")
    let [texteConduire, setTexteConduire] = React.useState("Identifier les besoins métiers des clients et des utilisateurs.")
    let [texteCollaborer, setTexteCollaborer] = React.useState("Identifier ses aptitudes pour travailler dans une équipe.")

    let sujetS3 = "https://clarolineconnect.univ-lyon1.fr/icap_website/424/76579"
    let renduS3 = "https://trouvetonplat.alwaysdata.net/"

    const nextSemestre = () => {
        console.log("next")
        console.log(semestre, "SEMEMEMEM")
        setSemestre(semestre+1)
        switch(semestre){
            case 1 :
                setFiles(sujetRealS2,renduRealS2,sujetAdmS2,renduAdmS2,sujetGerS2,renduGerS2,sujetColS2,renduColS2,sujetColS2,renduColS2,sujetColS2,renduColS2)
                break
            case 2 :
                setTextes("Partir des exigences et aller jusqu'à une application complète.","Sélectionner les algorithmes adéquats pour répondre à un problème donné.","Déployer des services dans une architecture réseau.","Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité."," Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs.","Situer son rôle et ses missions au sein d'une équipe informatique.")
                setFiles(sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3)
                break
            case 3 :
                setInfoAdditionnelle(" - Stage ")
                break
            case 4 :
                setTextes("Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...).","Analyser et optimiser des applications.","Da.","Optimiseraes, a."," as.","Manager une équipe informatique.")
                setInfoAdditionnelle(" - Alternance 1 ")
                break
            case 5 :
                console.log(5)
                setInfoAdditionnelle(" - Alternance 2 ")
                break
            case 6 :
                console.log(6)
                setInfoAdditionnelle("")
                setSemestre(1)
                setFiles(sujetRealS1,renduRealS1,sujetAdmS1,renduAdmS1,sujetGerS1,renduGerS1,sujetConsS1,renduConsS1,sujetColS1,renduColS1,sujetColS1,renduColS1)
                setTextes("Développer des applications informatiques simples.","Appréhender et construire des algorithmes.","Installer et configurer un poste de travail.","Concevoir et mettre en place une base de données à partir d'un cahier des charges client.","Identifier les besoins métiers des clients et des utilisateurs.","Identifier ses aptitudes pour travailler dans une équipe.")
                break
            default :
                console.log("ahh")
                break
        }
    }

    const prevSemestre = () => {
        console.log("prev")
        setSemestre(semestre-1)
        switch(semestre){
            case 1 :
                setSemestre(6)
                setTextes("Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...).","Analyser et optimiser des applications.","Da.","Optimiseraes, a."," as.","Manager une équipe informatique.")
                setInfoAdditionnelle(" - Alternance 2")
                break
            case 2 :
                setFiles(sujetRealS1,renduRealS1,sujetAdmS1,renduAdmS1,sujetGerS1,renduGerS1,sujetConsS1,renduConsS1,sujetColS1,renduColS1,sujetColS1,renduColS1)
                break
            case 3 :
                setFiles(sujetRealS2,renduRealS2,sujetAdmS2,renduAdmS2,sujetGerS2,renduGerS2,sujetColS2,renduColS2,sujetColS2,renduColS2,sujetColS2,renduColS2)
                setTextes("Développer des applications informatiques simples.","Appréhender et construire des algorithmes.","Installer et configurer un poste de travail.","Concevoir et mettre en place une base de données à partir d'un cahier des charges client.","Identifier les besoins métiers des clients et des utilisateurs.","Identifier ses aptitudes pour travailler dans une équipe.")
                break
            case 4 :
                setFiles(sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3,sujetS3,renduS3)
                setInfoAdditionnelle("")
                break
            case 5 :
                setTextes("Partir des exigences et aller jusqu'à une application complète.","Sélectionner les algorithmes adéquats pour répondre à un problème donné.","Déployer des services dans une architecture réseau.","Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité."," Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs.","Situer son rôle et ses missions au sein d'une équipe informatique.")
                setInfoAdditionnelle(" - Stage ")
                break
            case 6 :
                console.log(6)
                setInfoAdditionnelle(" - Alternance 1")
                break
            default :
                console.log("ahh")
                break
        }
    }

    const setFiles = (sReal,rReal,sOpti,rOpti,sAdm,rAdm,sGer,rGer,sCon,rCon,sCol,rCol) => {
        setSujetRealiser(sReal)
        setRenduRealiser(rReal)
        setSujetOptimiser(sOpti)
        setRenduOptimiser(rOpti)
        setSujetAdministrer(sAdm)
        setRenduAdministrer(rAdm)
        setSujetGerer(sGer)
        setRenduGerer(rGer)
        setSujetConduire(sCon)
        setRenduConduire(rCon)
        setSujetCollaborer(sCol)
        setRenduCollaborer(rCol)
    }

    const setTextes = (tReal,tOpti,tAdm,tGer,tCon,tCol) => {
        setTexteRealiser(tReal)
        setTexteOptimiser(tOpti)
        setTexteAdministrer(tAdm)
        setTexteGerer(tGer)
        setTexteConduire(tCon)
        setTexteCollaborer(tCol)
    }

    const close = () => {
        gsap.to(windowRef.current, {opacity: 0, duration: 0.5}).then(() =>
            {
                windowRef.current.style.display = "none"
                props.onClose()
            }
        )
    }

    return(
        <Html style={{display:"none"}} transform={false} position={props.position} fullscreen ref={windowRef} >
            <div 
            onClick={(e)=>e.stopPropagation()}
            onPointerEnter={(e)=>e.stopPropagation()}
            style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                }}>
                <div style={{
                    width:"94vw",
                    height:"94vh",
                    border: "7px solid white",
                    flexDirection: "column",
                    background : "#2C97FF",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <h1 style={{color:"white", fontSize:"50px",marginTop:"5px", marginBottom:"5px"}}>PORTFOLIO IUT</h1>
                    <img src="croix.png" style={{position:"absolute",top:"7%",left:"5%",width:"30px",cursor:"pointer"}} onClick={close}></img>
                    <div  style={{display:"flex",flexDirection:"column", alignItems:"center", gap:"15px"}}>
                            <h2 style={{marginBottom:"0", marginTop:"2px"}}>Semestre {semestre} {infoAdditionnelle}</h2>


                        <div style={{display:"flex", alignItems:"center", gap:"20px" }}>
                            <div style={{width:"25vw"}}>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                    <img src='realiser.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                    <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Réaliser </h3>
                                </div>
                                <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteRealiser}</p>
                                
                                {semestre < 4 &&
                                <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                    <a href={sujetRealiser} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                    <a href={renduRealiser} download><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                </div>
                                }
                                {semestre == 4 && <p style={{textAlign:"center"}}>Réalisation et mise en production de l'application BROS3.</p>}
                                {semestre == 5 && <p style={{textAlign:"center"}}>Mise en place de MAESTRO, application plus large.</p>}
                                {semestre == 6 && <p style={{textAlign:"center"}}>Mise en place de nouvelles pages et création de fonctionnalités.</p>}
                            </div>

                            <div style={{width:"25vw"}}>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                    <img src='optimiser.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                    <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Optimiser </h3>
                                </div>
                                <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteOptimiser}</p>

                                {semestre < 4 &&
                                <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                    <a href={sujetOptimiser} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                    <a href={renduOptimiser} download><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                </div>
                                }
                                {semestre == 4 && <p style={{textAlign:"center"}}>Mise au point d'un fonctionnement en lazy loading.</p>}
                                {semestre == 5 && <p style={{textAlign:"center"}}>Confrontation à de nouvelles problématiques et nouvelle recherche pour BROS3.</p>}
                                {semestre == 6 && <p style={{textAlign:"center"}}>Mise en place de tests et montée de version.</p>}

                            </div>

                            {semestre < 5 && 
                                <div style={{width:"25vw"}}>
                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                        <img src='administrer.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                        <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Administrer </h3>
                                    </div>
                                    <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteAdministrer}</p>

                                    {semestre < 4 &&
                                    <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                        <a href={sujetAdministrer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                        <a href={renduAdministrer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                    </div>
                                    }
                                    {semestre == 4 && <p style={{textAlign:"center"}}>Application hébergée sur le cloud liée à un S3.</p>}
                                </div>
                            }

                            { semestre > 4 &&
                                <div style={{width:"25vw"}}>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                    <img src='collaborer.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                    <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Collaborer </h3>
                                </div>
                                <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteCollaborer}</p>

                                {semestre < 4 &&
                                <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                    <a href={sujetCollaborer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                    <a href={renduCollaborer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                </div>
                                                                }
                                {semestre == 4 && <p style={{textAlign:"center"}}>Collaboration avec un collègue chargé du backend.</p>}
                                {semestre == 5 && <p style={{textAlign:"center"}}>Prises de décisions sur les priorités et sur l'organisation.</p>}
                                {semestre == 6 && <p style={{textAlign:"center"}}>Collaboration avec l'ops et le développeur backend pour assurer un environnement fonctionnel.</p>}
                            </div>
                            }
                        </div>

                        {semestre == 5 &&
                        <p style={{width:"70%", textAlign:"center",color:"white"}}>Ce premier semestre d'alternance a été une expérience enrichissante où j'ai consolidé mes compétences techniques. 
                            La collaboration au sein de l'équipe m'a permis de prendre des initiatives et d'apporter ma vision au projet MAESTRO. L'adaptabilité et la résolution 
                            proactive des problèmes ont été des compétences cruciales, tout comme la capacité à prendre des décisions autonomes. Cette expérience a renforcé ma 
                            compréhension réaliste du monde de l'entreprise et m'a poussé à relever des défis techniques avec une approche réfléchie.</p>
                        }

                        {semestre == 6 &&
                        <p style={{width:"70%", textAlign:"center",color:"white"}}>L’alternance a profondément influencé ma vie professionnelle en me permettant d’appliquer les 
                        connaissances théoriques acquises à l’école et de développer des compétences techniques spécifiques à l’informatique. Cette expérience m’a aussi aidé à 
                        comprendre les attentes du monde du travail et à renforcer des compétences essentielles telles que la gestion du temps, la communication et la résolution de problèmes. 
                        Ayant bénéficié de cette opportunité enrichissante, j’ai pris des initiatives et contribué activement à des projets comme MAESTRO, ce qui m’a donné la confiance 
                        nécessaire pour envisager de poursuivre un Master en alternance à l’école des Gobelins à Paris dans le domaine de la création numérique interactive.</p>
                        }

                        
                        {semestre < 5 &&
                        <div style={{display:"flex", alignItems:"center", gap:"20px" }}>

                                <div style={{width:"25vw"}}>
                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                        <img src='gerer.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                        <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Gérer </h3>
                                    </div>
                                    <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteGerer}</p>

                                    {semestre < 4 &&
                                    <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                        <a href={sujetGerer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                        <a href={renduGerer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                    </div>
                                                                    }
                                    {semestre == 4 && <p style={{textAlign:"center"}}>Liaison avec le S3.</p>}
                                </div>


                                <div style={{width:"25vw"}}>
                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                        <img src='conduire.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                        <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Conduire </h3>
                                    </div>
                                    <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteConduire}</p>

                                    {semestre < 4 &&
                                    <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                        <a href={sujetConduire} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                        <a href={renduConduire} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                    </div>
                                                                    }
                                    {semestre == 4 && <p style={{textAlign:"center"}}>Fonctionnement par sprints.</p>}
                                </div>

                            <div style={{width:"25vw"}}>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>                            
                                    <img src='collaborer.png' style={{width:"85px",border:"5px solid white", borderRadius:"50%", padding:"7px"}} alt="realiserlogo"></img>
                                    <h3 style={{margin:"0", color:"white",padding:"30px", position:"relative", left:"-47px",fontSize:"20px",borderTop:"5px solid white", borderRight:"5px solid white",borderBottom:"5px solid white", borderTopRightRadius: "25px",borderBottomRightRadius: "25px"}}> &nbsp; &nbsp;Collaborer </h3>
                                </div>
                                <p style={{fontSize:"15px", textAlign:"center",width:"23vw",color:"#EEEEEE"}}> {texteCollaborer}</p>

                                {semestre < 4 &&
                                <div style={{display:"flex", justifyContent:"center", width:"90%", gap:"20px" }}>
                                    <a href={sujetCollaborer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Sujet</button></a>
                                    <a href={renduCollaborer} target="_blank"><button style={{width:"70px", height:"40px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"black", fontSize:"15px", cursor:"pointer"}}>Rendu</button></a>
                                </div>
                                                                }
                                {semestre == 4 && <p style={{textAlign:"center"}}>Collaboration avec un collègue chargé du backend.</p>}
                            </div>
                        </div>
        }
                        

                    </div>
                
                    <div style={{position:"absolute",bottom: "35px",display: "flex",width: "92vw",gap: "80vw",justifyContent: "center"}}>
                        <button onClick={prevSemestre} style={{width:"50px", height:"50px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"#2C97FF", fontSize:"20px", cursor:"pointer"}}>◀</button>
                        <button onClick={nextSemestre} style={{width:"50px", height:"50px", backgroundColor:"white", borderRadius:"10px", border:"none", color:"#2C97FF", fontSize:"20px", cursor:"pointer"}}>▶</button>
                    </div>
                
                </div>
            </div>
        </Html>
    )
}