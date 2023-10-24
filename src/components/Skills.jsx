import React from "react";
import "../css/skilss.css";

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">
                Habilidades
            </h2>
            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">Frontend</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__level">Básico</span>
                                </div>
                            </div>
                           
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__level">Intermedio</span>
                                </div>
                            </div>
                           
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__level">Intermedio</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__level">Básico</span>
                                </div>
                            </div>
                           
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills__level">Intermedio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__content">
                    <h3 className="skills__title">Backend</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__level">Básico</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className="skills__level">Básico</span>
                                </div>
                            </div>
                               
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;