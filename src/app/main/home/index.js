import React from "react";
import { motion } from "framer-motion";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";

const Home = () => {
    return (
        <section id="home">
            <div className="home">
                <div className="invisible">-</div>
                <div className="home__container glitch">
                    <GlitchSquiggly scaleNoise={2} disabled={false}>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 1 },
                            }}
                        >
                            @Tred
                        </motion.h1>
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
