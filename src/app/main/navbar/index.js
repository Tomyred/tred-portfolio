import React from "react";
import navigationConfig from "../../config/navigationConfig";
import resume from "../../assets/docs/resume.pdf";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__title">
                <h1>{"{{Logo here}}"}</h1>
            </div>
            <div className="navigation">
                {navigationConfig.map((element, i) => {
                    return (
                        <span key={i}>
                            <a href={element.href}>{element.title}</a>
                        </span>
                    );
                })}
                <span>
                    <a href={resume} download="Tomás_Rojo_resume">
                        Dowload Resume
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
