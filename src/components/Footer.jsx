import React from "react";
import "../css/footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Rosario</h1>
                        <span className="footer__subtitle">Desarrolladora Frontend Junior</span>
                    </div>
                    <ul className="footer__links">
                        <li>
                            <a href="#education" className="footer__link">Estudios</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Proyectos</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contacto</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://github.com/Rous-99" className="footer__social" target="_blank"> 
                            <i className="uil uil-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/rosario-bernal/" className="footer__social" target="_blank">
                            <i className="uil uil-linkedin"></i>
                        </a>

                        <a href="https://roweb-app.web.app" className="footer__social" target="_blank">
                            <i className="uil uil-globe"></i>
                        </a>

                    </div>
                </div>
                <p className="footer__copy">&#169; RoWebDesign. Derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer