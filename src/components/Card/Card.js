import Back from "../../assets/card/back.png";
import React from "react";
import "./Card.scss";

export default function Card({card, handleChoice, flipped}) {
    const handleClick = () => {
        handleChoice(card);
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