import React from 'react';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';

const Home = () => {
    return (
        <section id='home'>
            <Particles options={particlesOptions} />
            <div className='home'>
                <div className='home__container glitch'>
                    <h1>@Torj</h1>
                    <h3>Tomás Rojo</h3>
                    <p>Full-Stack developer with passion</p>
                    <p>for technology</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
