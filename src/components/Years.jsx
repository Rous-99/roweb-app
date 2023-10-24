import React, { Component } from "react";
import "../css/education.css";

class Years extends Component{
    constructor(props){
        super(props);
        this.state = {
            mostrar2022:false,
            mostrar2023:true
        };
    }

    mostrar2022 = () => {
        this.setState({
            mostrar2022:true,
            mostrar2023:false
        });
    }

    mostrar2023 = () =>{
        this.setState({
            mostrar2022:false,
            mostrar2023:true
        });
    }

    render(){
        return(
            <div>
                    <div className="education__journey">
                        <div className="education__button button--flex icon__active" onClick={this.mostrar2023}>
                            <i className="uil uil-graduation-cap education__icon"></i>2023
                        </div>
                        <div className="education__button button--flex" onClick={this.mostrar2022}>
                            <i className="uil uil-graduation-cap education__icon"></i>2022
                        </div>
                    </div>
                    {this.state.mostrar2023 && <div>
                         <div className="education__data">
                            <div className="empty"></div>
                                <div>
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                                <div>
                                    <h3 className="education__title">Bootcamp Frontend Avanzado (Becado)</h3>
                                    <span className="education__subtitle">Código Facilito</span>
                                </div>
                            </div>
                            <div className="education__data">
                                <div>
                                    <h3 className="education__title">Especialización Diseño y Programación Web (En curso)</h3>
                                    <span className="education__subtitle">UOC</span>
                                </div>
                                <div>
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                            </div>
                        </div>
                    }
                    {this.state.mostrar2022 && <div>
                         <div className="education__data">
                                <div className="empty"></div>
                                <div>
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                                <div>
                                    <h3 className="education__title">Bootcamp Javascript</h3>
                                    <span className="education__subtitle">Código Facilito</span>
                                </div>
                            </div>
                            <div className="education__data">
                                <div>
                                    <h3 className="education__title">Bootcamp Introducción a la Programación</h3>
                                    <span className="education__subtitle">Código Facilito</span>
                                </div>
                                <div>
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                            </div>
                            <div className="education__data">
                                <div className="empty"></div>
                                <div>
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                                <div>
                                    <h3 className="education__title">Bootcamp Frontend</h3>
                                    <span className="education__subtitle">Código Facilito</span>
                                </div>
                            </div>
                        </div>
                    }      
            </div>
        );
    }
}

export default Years