import Bowser from "../../assets/card/bowser.png";
import Cloud from "../../assets/card/cloud.png";
import Flower from "../../assets/card/flower.png";
import Goomba from "../../assets/card/goomba.png";
import Luigi from "../../assets/card/luigi.png";
import Mario from "../../assets/card/mario.png";
import Mushroom from "../../assets/card/mushroom.png";
import Star from "../../assets/card/star.png";
import React, {useEffect, useState} from "react";
import Card from "../Card/Card";

const cardImages = [
    {src: Bowser, matched: false},
    {src: Cloud, matched: false},
    // {src: Flower, matched: false},
    // {src: Goomba, matched: false},
    // {src: Luigi, matched: false},
    // {src: Mario, matched: false},
    // {src: Mushroom, matched: false},
    // {src: Star, matched: false},
]

export default function Game() {
    let cardId = 0;
// Shuffle the cards → Fisher-Yates shuffle
    const shuffleCards = () => {
        let shuffledArray = [...cardImages, ...cardImages];
        let currentIndex = shuffledArray.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
            shuffledArray[currentIndex] = {...shuffledArray[currentIndex], id: cardId++}; // create a new object with a unique ID
        }
        setMoves(0);
        setFirstCard(null);
        setSecondCard(null);
        setCards(shuffledArray);
    }

    const [moves, setMoves] = useState(0);
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const resetMove = () => {
        setFirstCard(null);
        setSecondCard(null);
        setMoves(moves + 1);
        setDisabled(false);
    }

    const checkWin = () => {
        console.log(cards)
        if (cards.every(card => card.matched)) {
            console.log("You win!");
        }
    }

    // Compare the two cards
    useEffect(() => {
        if (firstCard && secondCard) {
            setDisabled(true); // When 2 cards are picked, we disable the other cards
            if (firstCard.src === secondCard.src) {
                // Mark the cards as matched
                setCards(cards.map(card => {
                    if (card.src === firstCard.src) { // Doesn't matter if we use firstCard or secondCard, it's the same src
                        return {...card, matched: true};
                    }
                    return card; // return the card as is if it's not the one we're looking for
                }));
                checkWin();
            }
            setTimeout(resetMove, 1000);
        }
    }, [firstCard, secondCard]);
    // Starts the game
    useEffect(() => {
        shuffleCards();
    }, []);
    const handleChoice = (card) => {
        // Stop the user from being able to click the first card twice
        if(card.id === firstCard?.id) return;
        firstCard ? setSecondCard(card) : setFirstCard(card); // if firstCard is null, set it to card, else set secondCard to card
    }

    return (
        <div>
            <div className={"card-grid"}>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === firstCard || card === secondCard || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
            <div className={"move-counter"}>
                <h1>Moves: {moves}</h1>
            </div>
        </div>
    );
};