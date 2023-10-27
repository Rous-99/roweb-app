import React, {useEffect, useState} from "react";
import "../css/about.css";
import  CV  from "../assets/CV.pdf";
import AboutImg from "../../avatar.jpg";
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
        
        // console.log("deberia cargar despues")
//         let download= false;
//         if(!value){ //si no esta autenticado el usuario
//             signInWithPopup(auth, provider).then((data) => {
//                 setValue(data.user.email)
//                 localStorage.setItem("email", data.user.email)
//                 download=true;
// ç            })
//             window.open(CV, '_blank');
//         }else if(download==true){
//             window.open(CV, '_blank');
//         }else{ //si ya esta autenticado
//             window.open(CV, '_blank');
//         }
        // const pdfUrl = 'https://drive.google.com/file/d/1Tk4Wni6nJRHQnNyeYESntUigrEGLxWuz/view?usp=sharing';
        // window.open(pdfUrl, '_blank'); // Abre la URL en una nueva ventana o pestaña para descargar el PDF

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