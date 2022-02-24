import React from "react";
import Projects from "./projects";
import TechGrid from "./techGrid";

const Summary = () => {
    return (
        <div id="summary" className="summary">
            <Projects />
            <TechGrid />
        </div>
    );
};

export default Summary;
