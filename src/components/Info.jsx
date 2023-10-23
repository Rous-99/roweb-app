import React from "react";

const Info = () =>{
    return (
        <div className="home__data">
            <h1 className="home__title">Rosario Bernal</h1>
            <h2 className="home__subtitle">Desarrolladora Web Junior</h2>
            <p className="home__description">Soy una apasionada del desarrollo web con ganas de poner en práctica lo aprendido y de seguir aprendiendo. <br></br>Me encantan los retos para poder superarme a mí misma y demostrar mis habilidades. </p>
            <a href="#contact" className="button button--flex">
                Contáctame <i className="uil uil-message button__icon"></i>
            </a>
        </div>
    )
}

export default Info