import Bowser from "../../assets/card/bowser.png";
import Cloud from "../../assets/card/cloud.png";
import Flower from "../../assets/card/flower.png";
import Goomba from "../../assets/card/goomba.png";
import Luigi from "../../assets/card/luigi.png";
import Mario from "../../assets/card/mario.png";
import Mushroom from "../../assets/card/mushroom.png";
import Star from "../../assets/card/star.png";
import React, {useEffect, useState} from "react";
import Playing from "../../assets/playing.gif";
import Won from "../../assets/won.gif";
import Card from "../Card/Card";

const cardImages = [
    {src: Bowser, matched: false},
    {src: Cloud, matched: false},
    {src: Flower, matched: false},
    {src: Goomba, matched: false},
    {src: Luigi, matched: false},
    {src: Mario, matched: false},
    {src: Mushroom, matched: false},
    {src: Star, matched: false},
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
    const [won, setWon] = useState(false);

    const resetMove = () => {
        setFirstCard(null);
        setSecondCard(null);
        setMoves(moves + 1);
        setDisabled(false);
    }

    const checkWin = () => {
        if (cards.every(card => card.matched)) {
            setWon(true);
        }
    }

    // Compare the two cards
    useEffect(() => {
        if (firstCard && secondCard) {
            setDisabled(true); // When 2 cards are picked, we disable the other cards
            if (firstCard.src === secondCard.src) {
                // Mark the cards as matched
                firstCard.matched = true;
                secondCard.matched = true;
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
            <img src={Playing} alt={"Playing"} className={"playing"}/>
            {won ? <img src={Won} alt={"won"} className={"won"}/> : null}
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
                <h1>{moves}</h1>
            </div>
        </div>
    );
};