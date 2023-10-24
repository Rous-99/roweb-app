import React from "react";
import CV from "../assets/CV.pdf";

const Done = () =>{
    return (
        <div>
            <a download="" href={CV} className="button button__cv">Descargar CV 
                                <i className="uil uil-download-alt button__icon"></i>
            </a>
        </div>
    )
}

export default Done