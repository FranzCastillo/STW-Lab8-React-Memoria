import React, {useState} from "react";
import DS from "./components/DS/DS";

const App = () => {
    const [newGame, setNewGame] = useState(false);

    const handleClick = () => {
        setNewGame(true);
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
                    Start
                </button>
            </div>
            <div className="right-column">
                {newGame ? <DS/> : null}
            </div>
        </div>

    );
};

export default App;
