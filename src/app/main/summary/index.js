import React from "react";
import Projects from "./projects";
import TechGrid from "./techGrid";

const Summary = () => {
    return (
        <section id="summary">
            <div className="summary">
                <Projects />
                <TechGrid />
            </div>
        </section>
    );
};

export default Summary;
