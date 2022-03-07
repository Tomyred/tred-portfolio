import React from "react";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

const Home = () => {
    return (
        <section id="home">
            <Particles options={particlesOptions} />
            <div className="home">
                <div className="home__container glitch">
                    <GlitchSquiggly scaleNoise={2} disabled={false}>
                        <h1>@Tred</h1>
                        <h3>Tomás Rojo</h3>
                        <p>Web developer with passion</p>
                        <p> for learning and technology</p>
                    </GlitchSquiggly>
                </div>
            </div>
        </section>
    );
};

export default Home;
