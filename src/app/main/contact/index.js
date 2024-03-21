import React from "react";
import ContactForm from "./form";
import Network from "./network";

const Contact = () => {
    return (
        <section id="contact">
            <div className="page-section contact">
                <div>
                    <h2 className="title"> Contact </h2>
                    <p style={{marginBottom: 40}} >Let's work together!</p>
                </div>
                <div className="contact__body">
                    <ContactForm />
                    <Network />
                </div>
            </div>
        </section>
    );
};

export default Contact;
