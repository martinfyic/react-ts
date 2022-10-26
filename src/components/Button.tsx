interface Props {
    letter: string;
    checkLetter: (letter: string) => void;
}

export const Button = ({ letter, checkLetter }: Props) => {
    return <button onClick={() => checkLetter(letter)}>{letter}</button>;
};
