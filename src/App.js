import React, {useEffect, useState} from "react";
import DS from "./components/DS/DS";

const App = () => {
    const [showGame, setShowGame] = useState(false);

    // Dismount the game when the user clicks the button
    const handleClick = () => {
        setShowGame(currentShowGame => !currentShowGame);
    }


    const setGame = () =>{
        console.log("setGame")
    }

    return (
        <div className="App">
            <div className="left-column">
                <h1>New Super Mario Bros DS</h1>
                <h2>Memory Match</h2>
                <button
                    id="start-button"
                    onClick={() => {
                        handleClick()
                    }}
                >
                    {showGame ? "Terminar" : "Iniciar"}
                </button>
            </div>
            <div className="right-column">
                <DS showGame={showGame}/>
            </div>
        </div>

    );
};

export default App;
