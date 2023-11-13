import React, {useEffect, useState} from "react";
import "../css/about.css";
import  CV  from "../assets/Rosario_Bernal_CV.pdf";
import AboutImg from "../../Avatar_square.jpeg";
import {auth, provider} from "../../firebase.js";
import {signInWithPopup} from "firebase/auth";
import Done from "./Done.jsx";


const About = () => {
    
    const [value, setValue] = useState('');
    const [textoBoton, setTextoBoton]=useState('Desbloquear CV');

 

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
        setTextoBoton('Descargar CV');
    }
        
       
    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    })


    return(
        <section className="about section" id="about">
            <h2 className="section__title">
                Sobre mí
            </h2>
            <div className="about__container container grid">
                <img src={AboutImg} alt="Foto personal" className="about__img"/>
                <div className="about__data">
                    <p className="about__description">Cuento con el conocimiento, las ganas y las herramientas necesarias para crear páginas web y formar parte de proyectos</p>
                    {value?<Done />:
                        <button className="button__cv" onClick={handleClick}>
                            <a className="button button__cv" download={CV}>{textoBoton} 
                                <i className="uil uil-download-alt button__icon"></i>
                            </a>
                        </button>
                    }
                </div>
            </div>
        </section>
    )
}

export default About 