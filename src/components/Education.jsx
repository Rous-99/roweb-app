import React from "react";
import "../css/education.css";
import Years from "../components/Years.jsx";

const Education = () => {
   
    return(
        <section className="education section" id="education">
            <h2 className="section__title">Estudios</h2>
            <span className="section__subtitle">Mi recorrido personal</span>
            <div className="education__container container">
                <Years />                
            </div>
        </section>
    )
}

export default Education