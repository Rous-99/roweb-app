import React from 'react';
import "../css/home.css";
import Social from "./Social.jsx";
import Info from "./Info.jsx";

const Home = () =>{
    return(
        <section className="home section" id='home'>
            <div className="home container">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Info />
                    <div className="home__scroll">
                        <a href="#" className="home__scroll-button button--flex">
                            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className='home__scroll-name'>Desliza hacia abajo</span>
                            <i className="uil uil-arrow-down home__scroll-arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home