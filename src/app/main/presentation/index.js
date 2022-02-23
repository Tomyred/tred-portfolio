import React from "react";
import { motion } from "framer-motion";

const Presentation = () => {
    return (
        <div id="presentation" className="grid__center presentation">
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
            <p>Web developer with passion for learning and technology</p>
        </div>
    );
};

export default Presentation;
