import Bowser from "../../assets/card/bowser.png";
import Cloud from "../../assets/card/cloud.png";
import Flower from "../../assets/card/flower.png";
import Goomba from "../../assets/card/goomba.png";
import Luigi from "../../assets/card/luigi.png";
import Mario from "../../assets/card/mario.png";
import Mushroom from "../../assets/card/mushroom.png";
import Star from "../../assets/card/star.png";
import React, {useState} from "react";
import Card from "../Card/Card";

const cardImages = [
    {src: Bowser},
    {src: Cloud},
    {src: Flower},
    {src: Goomba},
    {src: Luigi},
    {src: Mario},
    {src: Mushroom},
    {src: Star},
]

let cardId = 0;


// Shuffle the cards → Fisher-Yates shuffle
const getShuffledCards = () => {
    let shuffledArray = [...cardImages, ...cardImages];
    let currentIndex = shuffledArray.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
        shuffledArray[currentIndex] = {...shuffledArray[currentIndex], id: cardId++}; // create a new object with a unique ID
    }

    return shuffledArray;
}


const handleChoice = (card) => {
    console.log(card);
}

export default function Game() {
    const [moves, setMoves] = useState(0);
    const [cards, setCards] = useState(getShuffledCards());
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    console.log(cards);

    return(
        <div className={"card-grid"}>
            {cards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                />
            ))}
        </div>
    );
};