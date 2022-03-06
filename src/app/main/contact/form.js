import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="contact__form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">FirstName</label>
                <span
                    style={{
                        color: "red",
                        fontSize: 13,
                    }}
                >
                    {errors.firstName ? errors.firstName.message : ""}
                </span>
                <input
                    id="firstName"
                    type="text"
                    className="form__input w-100"
                    {...register("firstName", {
                        required: {
                            value: true,
                            message: "This field is required",
                        },
                        minLength: {
                            value: 3,
                            message:
                                "Minimum 3 characters.I'm sorry if your name has only two letters :(.",
                        },
                    })}
                />
                <label htmlFor="lastName">Lastname</label>
                <span
                    style={{
                        color: "red",
                        fontSize: 13,
                    }}
                >
                    {errors.lastName ? errors.lastName.message : ""}
                </span>
                <input
                    id="lastName"
                    type="text"
                    className="form__input w-100"
                    {...register("lastName", {
                        required: {
                            value: true,
                            message: "This field is required",
                        },
                        minLength: {
                            value: 3,
                            message:
                                "Minimum 3 characters.I'm sorry if your last name has only two letters :(.",
                        },
                    })}
                />
                <label htmlFor="email">Email</label>
                <span
                    style={{
                        color: "red",
                        fontSize: 13,
                    }}
                >
                    {errors.email ? errors.email.message : ""}
                </span>
                <input
                    id="email"
                    type="email"
                    className="form__input w-100"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "This field is required",
                        },
                        minLength: {
                            value: 5,
                            message: "Minimum 5 characters",
                        },
                    })}
                />
                <label htmlFor="subject">Subject</label>
                <span
                    style={{
                        color: "red",
                        fontSize: 13,
                    }}
                >
                    {errors.subject ? errors.subject.message : ""}
                </span>
                <input
                    id="subject"
                    type="text"
                    className="form__input w-100"
                    {...register("subject", {
                        required: {
                            value: true,
                            message: "This field is required",
                        },
                    })}
                />
                <label htmlFor="message">Message</label>
                <span
                    style={{
                        color: "red",
                        fontSize: 13,
                    }}
                >
                    {errors.message ? errors.message.message : ""}
                </span>
                <textarea
                    id="message"
                    className="form__textarea w-100"
                    rows={5}
                    {...register("message", {
                        required: {
                            value: true,
                            message: "This field is required",
                        },
                    })}
                ></textarea>
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
