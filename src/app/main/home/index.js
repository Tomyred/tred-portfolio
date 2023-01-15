import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

const Home = () => {
    return (
        <section id="home">
            <Particles options={particlesOptions} />
            <div className="home">
                <div className="home__container glitch">
                    <h1>@Tred</h1>
                    <h3>Tomás Rojo</h3>
                    <p>Web/Mobile developer with passion</p>
                    <p> for learning and technology</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
