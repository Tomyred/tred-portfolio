import React, { useState } from "react";
import navigationConfig from "../../config/navigationConfig";
import resume from "../../assets/docs/resume.pdf";
import Collapsible from "react-collapsible";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar__container">
            <div className="navbar">
                <div className="navbar__title">
                    <p>{"{{Logo here}}"}</p>
                </div>
                <div className="bw__navigation">
                    {navigationConfig.map((element, i) => {
                        return (
                            <a key={i} href={element.href}>
                                {element.title}
                            </a>
                        );
                    })}

                    <a href={resume} download="Tomás_Rojo_resume">
                        Dowload Resume
                    </a>
                </div>
                <div className="burger" onClick={() => setOpen(!open)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="collapsible">
                <Collapsible
                    open={open}
                    transitionTime={200}
                    onTriggerClosing={() => setOpen(false)}
                >
                    {navigationConfig.map((element, i) => {
                        return (
                            <a
                                key={i}
                                className="collapse__item"
                                href={element.href}
                                onClick={() => setOpen(false)}
                            >
                                {element.title}
                            </a>
                        );
                    })}

                    <a
                        className="collapse__item"
                        href={resume}
                        download="Tomás_Rojo_resume"
                    >
                        Dowload Resume
                    </a>
                </Collapsible>
            </div>
        </div>
    );
};

export default Navbar;
