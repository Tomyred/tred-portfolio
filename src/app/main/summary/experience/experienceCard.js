import React from "react";

const ExperienceCard = ({ image, title, text1, text2, text3, description }) => {
    return (
        <div className="experience__card">
            <div className="card__detail">
                <img src={image.base64} alt={image.alt} />
                <div>
                    <h3>{title}</h3>
                    <p className="card_detail_element"> {text1} </p>
                    <p className="card_detail_element"> {text2} </p>
                    <p className="card_detail_element"> {text3} </p>
                </div>
            </div>
            <p> {description} </p>
        </div>
    );
};

export default ExperienceCard;
