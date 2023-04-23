import Bowser from "../../assets/card/bowser.png";
import Flower from "../../assets/card/flower.png";
import Goomba from "../../assets/card/goomba.png";
import Luigi from "../../assets/card/luigi.png";
import Mario from "../../assets/card/mario.png";
import Mushroom from "../../assets/card/mushroom.png";
import Star from "../../assets/card/star.png";
import Back from "../../assets/card/back.png";
import React, {useState} from "react";
import Card from "../Card/Card";

export default function Game() {
    const cardImages = [
        {src: Bowser},
        {src: Flower},
        {src: Goomba},
        {src: Luigi},
        {src: Mario},
        {src: Mushroom},
        {src: Star},
    ]
    const [moves, setMoves] = useState(0);

    // Shuffle the cards → Fisher-Yates shuffle
    const shuffleCards = () => {
        let shuffledArray = [...cardImages, ...cardImages]; // Make a copy of the array and duplicate its content
        let currentIndex = shuffledArray.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]]; // Swap the elements
            shuffledArray[currentIndex].id = Math.floor(Math.random() * 100);  // Add a random id to each card
        }
        setMoves(0);
        return shuffledArray;
    }
    const [cards, setCards] = useState(shuffleCards);
    console.log(cards);

    return(
        <div className={"card-grid"}>
            {cards.map(card => (
                <Card key={card.id} card={card}/>
            ))}
        </div>
    );
};