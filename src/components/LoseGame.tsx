interface Props {
    word: string;
}

export const LoseGame = ({ word }: Props) => {
    return (
        <>
            <h2>GAME OVER</h2>
            <h3>La palabra correcta es: {word}</h3>
        </>
    );
};
