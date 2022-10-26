import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import { getRandomWord } from "./helpers/getRandomWord";
import "./App.css";
import { LoseGame } from "./components/LoseGame";

function App() {
    const [word, setWord] = useState(getRandomWord);
    const [hiddenWord, setHidenWord] = useState("_ ".repeat(word.length));
    const [attempts, setAttempts] = useState<number>(0);
    const [lose, setLose] = useState<boolean>(false);
    const [won, setWon] = useState<boolean>(false);

    useEffect(() => {
        if (attempts >= 9) setLose(true);
    }, [attempts]);

    useEffect(() => {
        const currentHidenWord = hiddenWord.split(" ").join("");
        if (currentHidenWord === word) setWon(true);
    }, [hiddenWord]);

    const checkLetter = (letterSelected: string) => {
        if (lose) return;
        if (won) return;
        if (!word.includes(letterSelected)) {
            setAttempts(Math.min(attempts + 1, 9));
            return;
        }

        const hiddenWordArray: string[] = hiddenWord.split(" ");

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letterSelected) {
                hiddenWordArray[i] = letterSelected;
            }
        }

        setHidenWord(hiddenWordArray.join(" "));
    };

    const restartGame = () => {
        const newWord = getRandomWord();

        setWord(newWord);
        setHidenWord("_ ".repeat(newWord.length));
        setLose(false);
        setWon(false);
        setAttempts(0);
    };

    return (
        <div className="App">
            {!won ? (
                <h1>Ahorcado</h1>
            ) : (
                <h1>🎉🎊🎉Felicitaciones Ganaste!🎉🎊🎉</h1>
            )}

            <HangImage imageNumber={attempts} />

            <h2>{hiddenWord}</h2>

            <h3>Errores: {attempts}</h3>

            {lose && <LoseGame word={word} />}

            <div>
                {letters.map((letter) => (
                    <Button
                        letter={letter}
                        checkLetter={checkLetter}
                        key={letter}
                    />
                ))}
            </div>
            {(won || lose) && (
                <button onClick={restartGame}>Reiniciarl el Juego</button>
            )}
        </div>
    );
}

export default App;
