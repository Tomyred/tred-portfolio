import React from "react";
import ProjectCarousel from "./projectCarousel";

const Projects = () => {
    return (
        <div id="projects" className="projects__container">
            <p>
                Take a look of more projects on JavaScript, Java and Python on
                my
                <a
                    href="https://github.com/Tomyred"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github!
                </a>
            </p>

            <div className="projects">
                <ProjectCarousel />
            </div>
        </div>
    );
};

export default Projects;
