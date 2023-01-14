import React from "react";
import ExperienceCard from "./experienceCard";
import softtek from "../../../assets/images/softtek-logo.png";
import tall from "../../../assets/images/tall-coop-logo.png";
import independecia from "../../../assets/images/coop-independecia.png";

const experienceArray = [
    {
        image: {
            base64: softtek,
            alt: "softtek",
        },
        title: "Front-End Developer",
        text1: "Softtek. Full time",
        text2: "April 2022 - Date",
        text3: "Argentina",
        description: "App development with React Native, React js, Ionic, Gitlab, Expo",
    },
    {
        image: {
            base64: tall,
            alt: "talleres-cooperativos",
        },
        title: "Instructor",
        text1: "Cooperative workshops. Part time",
        text2: "November 2021 - November 2022",
        text3: "Argentina",
        description: "Teaching introductory courses of Web development with MERN technologies",
    },
    {
        image: {
            base64: independecia,
            alt: "system coop global",
        },
        title: "Full-stack Developer",
        text1: "System Coop Global. Part time",
        text2: "Februari 2021 - April 2022",
        text3: "Argentina",
        description: "App development for clients including health, commercial and human resources entities with MERN stack technologies and Java Sping boot",
    },
];

const Experience = () => {
    return (
        <div className="experience page-section">
            <div>
                <h2 className="title">Professional experience:</h2>
            </div>
            <div>
                {experienceArray.map(elem => {
                    return <ExperienceCard {...elem} />;
                })}
            </div>
        </div>
    );
};

export default Experience;
