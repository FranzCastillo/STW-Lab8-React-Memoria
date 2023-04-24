import Back from "../../assets/card/back.png";
import React from "react";
import "./Card.scss";

export default function Card({card, handleChoice, flipped, disabled}) {
    const handleClick = () => {
        if (!disabled){ // If the card is not disabled (2 cards already picked), we can flip it
            handleChoice(card);
        }
    }

    return(
        <div className={"card"}>
            <div className={flipped ? "flipped" : ""}>
                <img className={"front"} src={card.src} alt={"card front"}/>
                <img
                    className={"back"}
                    src={Back}
                    alt={"card back"}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}