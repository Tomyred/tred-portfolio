import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projects from "./projects";

const ProjectCarousel = () => {
    return (
        <div className="carousel">
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
                {projects.map(project => {
                    return (
                        <div key={project.title}>
                            <img alt="project_pic" src={project.image} />
                            <div className="legend">
                                <h2 className="project__info">
                                    {project.title}
                                </h2>
                                <p className="project__info">
                                    {project.description}
                                </p>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Take a look
                                </a>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;
