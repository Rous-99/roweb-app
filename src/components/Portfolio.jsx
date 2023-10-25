import React, { useState } from "react";
import "../css/portfolio.css";
import PetloversImg from "../assets/img/petlovers.png";
import SeaschoolImg from "../assets/img/seaschool.png";
import AgendaImg from "../assets/img/agenda.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Portfolio = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }


    return(
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Proyectos</h2>
            <div className="portfolio__container container">
                <Swiper
                    className="portfolio__swiper"
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide className="portfolio__content grid">
                        <img src={PetloversImg} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">TITULO DEL PROYECTO</h3>
                            <p className="portfolio__description">DESCRIBIR EL PROYECTO</p>
                            <button className="portfolio__button" onClick={() => toggleTab(1)}>Ver <i className="uil uil-arrow-right portfolio__button-icon"></i></button>
                        </div>
                    </SwiperSlide>

                    <div className={toggleState === 1 ? "portfolio__project active__project": "portfolio__project"}>
                            <div className="portfolio__project-content">
                                <i className="uil uil-times portfolio__project-close" onClick={() => toggleTab(0)}></i>
                                <h3 className="portfolio__project-title">
                                <i className='bx bxs-dog icon__project'></i> PET LOVERS 
                                </h3>
                                <p className="portfolio__project-description">
                                    DESCRIPCION CONTENEDOR 1
                                </p>
                                <a href="https://rous-99.github.io/petlover/index.html"  className="button button--flex button--project" target="_blank">Ver proyecto<i className="uil uil-arrow-right button__icon"></i></a>
                            </div>
                        </div>

                    <SwiperSlide className="portfolio__content grid">
                        <img src={SeaschoolImg} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">SEA SCHOOL</h3>
                            <p className="portfolio__description">DESCRIBIR EL PROYECTO</p>
                            <button className="portfolio__button" onClick={() => toggleTab(2)}>Ver <i className="uil uil-arrow-right portfolio__button-icon"></i></button>
                        </div>
                    </SwiperSlide>

                    <div className={toggleState === 2 ? "portfolio__project active__project": "portfolio__project"}>
                            <div className="portfolio__project-content">
                                <i className="uil uil-times portfolio__project-close" onClick={() => toggleTab(0)}></i>
                                <h3 className="portfolio__project-title">
                                <i className='bx bx-water icon__project'></i> SEA SCHOOL
                                </h3>
                                <p className="portfolio__project-description">
                                    DESCRIPCION CONTENEDOR 2
                                </p>
                                <a href="https://rous-99.github.io/pagina-surf/index.html"  className="button button--flex button--project" target="_blank">Ver proyecto<i className="uil uil-arrow-right button__icon"></i></a>
                            </div>
                        </div>

                    <SwiperSlide className="portfolio__content grid">
                        <img src={AgendaImg} alt="" className="portfolio__img" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">TITULO DEL PROYECTO</h3>
                            <p className="portfolio__description">DESCRIBIR EL PROYECTO</p>
                            <button className="portfolio__button" onClick={() => toggleTab(3)}>Ver <i className="uil uil-arrow-right portfolio__button-icon"></i></button>
                        </div>
                    </SwiperSlide>

                    <div className={toggleState === 3 ? "portfolio__project active__project": "portfolio__project"}>
                            <div className="portfolio__project-content">
                                <i className="uil uil-times portfolio__project-close" onClick={() => toggleTab(0)}></i>
                                <h3 className="portfolio__project-title">
                                <i className='bx bxs-notepad icon__project'></i> AGENDA EN PYTHON
                                </h3>
                                <p className="portfolio__project-description">
                                    DESCRIPCION CONTENEDOR 3
                                </p>
                                <a href="https://github.com/Rous-99/agenda-contactos"  className="button button--flex button--project" target="_blank">Ver proyecto<i className="uil uil-arrow-right button__icon"></i></a>
                            </div>
                        </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio