import { useState }from "react";
import "../css/header.css";


const Header = () => {
    /*===========================SHOW MENU=====================*/

    const [Toggle, showMenu] = useState(false); //creamos una variable para el componente y le damos un valor inicial, en este caso será false porque no queremos que se muestre el menú desde el principio

    //Vamos a colocar el valor de Toggle en false, y cuando le demos al boton del menu se cambiara su valor a al contrario (a true), entonces se añadira la clase show-menu al componente y se mostrará el menu. Si es false solo se queda con la clase nav__menu.


    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">RoWebDesign</a>
                <div className={ Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i>Inicio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                Sobre mí
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                Habilidades
                            </a>
                        </li>
                         <li className="nav__item">
                            <a href="#education" className="nav__link">
                                <i className="uil uil-graduation-cap nav__icon"></i>
                            Estudios
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                Proyectos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Contacto
                            </a>
                        </li>
                       
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__btns">
                        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Header