import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import facebookClone from "../../../assets/images/facebook-clone.png";
import nodo20 from "../../../assets/images/nodo20.png";
import creditcard from "../../../assets/images/creditcard.png";
import cryptoPrices from "../../../assets/images/crypto-prices.png";
import darkmode from "../../../assets/images/darkmode-toggler.png";
import mediaFinder from "../../../assets/images/media-finder.png";
import webScraping from "../../../assets/images/webscraping.png";

const ProjectCarousel = () => {
    return (
        <div className="carousel">
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
                <div>
                    <img alt="project_pic" src={nodo20} />
                    <div className="legend">
                        <h2 className="project__info">Template app</h2>
                        <p className="project__info">
                            A scalable template app that can be used for a
                            multitude of purposes. Made with MERN stack
                            technologies and 3D animations
                        </p>
                        <a
                            href="https://nodo-ruta20.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>
                <div>
                    <img alt="project_pic" src={facebookClone} />
                    <div className="legend">
                        <h2 className="project__info">Facebook clone</h2>
                        <p className="project__info">
                            A facebook clone with google authentication and
                            realtime Firestore database
                        </p>
                        <a
                            href="https://copybook-df803.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>

                <div>
                    <img alt="project_pic" src={creditcard} />
                    <div className="legend">
                        <h2 className="project__info">Dynamic credit card</h2>
                        <p className="project__info">
                            A dynamic card form with 3d animations that can be
                            used for e-commerce
                        </p>
                        <a
                            href="https://tomyred.github.io/dinamic-card-form/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>

                <div>
                    <img alt="project_pic" src={cryptoPrices} />
                    <div className="legend">
                        <h2 className="project__info">Crypto-prices</h2>
                        <p className="project__info">
                            Bootstrap interface of current cryptocurrency prices
                            using the Coingecko api
                        </p>
                        <a
                            href="https://affectionate-bell-7e3879.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>
                <div>
                    <img alt="project_pic" src={darkmode} />
                    <div className="legend">
                        <h2 className="project__info">Theme toggler</h2>
                        <p className="project__info">
                            A simple theme to toggle by clicking on the sun and
                            the moon.
                        </p>
                        <a
                            href="https://tomyred.github.io/Dark-mode/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>
                <div>
                    <img alt="project_pic" src={mediaFinder} />
                    <div className="legend">
                        <h2 className="project__info">Media finder</h2>
                        <p className="project__info">
                            A multimedia content search engine (movies, shows,
                            books, etc) using OMDB API and Bootstrap
                        </p>
                        <a
                            href="https://youthful-yonath-701a94.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>
                <div>
                    <img alt="project_pic" src={webScraping} />
                    <div className="legend">
                        <h2 className="project__info">Web-scraping app</h2>
                        <p className="project__info">
                            An application that obtains data via scraping
                        </p>
                        <a
                            href="https://zealous-panini-b0ab67.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Take a look
                        </a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;
