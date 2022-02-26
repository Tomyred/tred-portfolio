import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact">
                <div>
                    <h2> Contact </h2>
                    <p>Send me a message and i will contact you</p>
                </div>

                <form>
                    <label htmlFor="firstName">FirstName</label>
                    <input
                        id="firstName"
                        type="text"
                        className="form__element"
                    />
                    <label htmlFor="lastName">Lastname</label>
                    <input
                        id="lastName"
                        type="text"
                        className="form__element"
                    />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form__element" />
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" className="form__element" />
                    {/* <label htmlFor="message">Message</label> */}
                    {/* <textarea id="message" className="form__element" rows="50">
                        dasdasdsaaa
                    </textarea> */}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
