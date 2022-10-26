import { useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";

function App() {
    const [word] = useState("COMPUTADORA");
    const [hidenWord] = useState("_ ".repeat(word.length));
    const [attempts, setAttempts] = useState(0);

    const checkLetter = (letterSelected: string) => {
        console.log(letterSelected);
        setAttempts(Math.min(attempts + 1, 9));
    };

    return (
        <div className="App">
            <h1>Ahorcado</h1>

            <HangImage imageNumber={attempts} />

            <h2>{hidenWord}</h2>

            <h3>Intentos: {attempts}</h3>

            <div>
                {letters.map((letter) => (
                    <button onClick={() => checkLetter(letter)} key={letter}>
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default App;
