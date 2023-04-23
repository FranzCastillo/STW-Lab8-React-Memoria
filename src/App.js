import React from "react";
import DS from "./components/DS/DS";

const App = () => {
    return (
        <div className="App">
            <div className="left-column">
                <h1>New Super Mario Bros DS</h1>
                <h2>Memory Match</h2>
                <button id="start-button">Start</button>
            </div>
            <div className="right-column">
                <DS />
            </div>
        </div>

    );
};

export default App;
