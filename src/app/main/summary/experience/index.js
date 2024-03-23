import React from 'react';
import ExperienceCard from './experienceCard';
import softtek from '../../../assets/images/softtek-logo.png';
import tall from '../../../assets/images/tall-coop-logo.png';
import independecia from '../../../assets/images/coop-independecia.png';

const experienceArray = [
    {
        image: {
            base64: softtek,
            alt: 'softtek tomas rojo software engineer',
        },
        title: 'Front-End Developer',
        text1: 'Softtek. Full time',
        text2: 'April 2022 - Date',
        text3: 'Argentina',
        description: ['App development, maintenance and monitoring.', <br/>, 'React js - React Native - Ionic - Java Spring Boot - Google Cloud Platform'],
    },
    {
        image: {
            base64: tall,
            alt: 'talleres-cooperativos tomas rojo software engineer',
        },
        title: 'Instructor',
        text1: 'Cooperative workshops. Part time',
        text2: 'November 2021 - November 2022',
        text3: 'Argentina',
        description: 'Taught full-stack web development with React.js and Express.js, covering concepts such as front-end UI design, state management, server-side API development, and database integration.',
    },
    {
        image: {
            base64: independecia,
            alt: 'system coop global tomas rojo software engineer',
        },
        title: 'Full-stack Developer',
        text1: 'System Coop Global. Part time',
        text2: 'February 2021 - April 2022',
        text3: 'Argentina',
        description: 'Full-stack development with React js, React Native, Java Spring Boot and Google Cloud Platform for health insurance entities',
    },
];

const Experience = () => {
    return (
        <div className='experience page-section'>
            <div>
                <h2 className='title'>Professional experience:</h2>
            </div>
            <div className='experience-container'>
                {experienceArray.map((elem) => {
                    return <ExperienceCard {...elem} />;
                })}
            </div>
        </div>
    );
};

export default Experience;
