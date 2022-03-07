import React, { useState } from "react";

const Network = () => {
    const [copyText, setCopyText] = useState("Copy");

    const copyEmail = () => {
        navigator.clipboard.writeText("tom.roj.laboral@gmail.com");

        setCopyText("Copied!");

        setTimeout(() => {
            setCopyText("Copy");
        }, 1500);
    };
    return (
        <div className="contact__network">
            <h3>Network</h3>
            <hr />
            <div className="network__element w-100">
                <div className="network__element">
                    <img
                        src="https://img.icons8.com/color/48/000000/gmail.png"
                        alt="gmail"
                    />
                    <p>Email: tom.roj.laboral@gmail.com</p>
                </div>
                <div className="network__button" onClick={copyEmail}>
                    <span>{copyText}</span>
                </div>
            </div>
            <div className="network__element w-100">
                <div className="network__element">
                    <img
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                        alt="linkedin"
                    />
                    <p>Tomás Rojo - Full Stack web developer</p>
                </div>
                <div className="network__button">
                    <a
                        href="https://www.linkedin.com/in/tom-roj-38743a214/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Take a look</span>
                    </a>
                </div>
            </div>
            <div className="network__element w-100">
                <div className="network__element">
                    <img
                        src="https://img.icons8.com/color/48/000000/github.png"
                        alt="github"
                    />
                    <p>Github: Tomás Rojo</p>
                </div>
                <div className="network__button">
                    <a
                        href="https://github.com/Tomyred"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Take a look</span>
                    </a>
                </div>
            </div>
            <div className="network__element w-100">
                <div className="network__element">
                    <img
                        src="https://img.icons8.com/color/48/000000/instagram-new.png"
                        alt="instagram"
                    />
                    <p>Instagram: Tomás Rojo</p>
                </div>
                <div className="network__button">
                    <a
                        href="https://www.instagram.com/tomas.rojo.1/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Take a look</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Network;
