const words: string[] = [
    "COMPUTADORA",
    "CELULAR",
    "CASA",
    "FUTBOL",
    "BASQUETBOL",
    "PELOTA",
    "PERRO",
    "GATO",
    "TRABAJO",
    "TRABAJADOR",
    "DESARROLLO",
    "TECLADO",
    "CABALLO",
    "CALEFON",
    "ABUELO",
    "CAMION",
    "URUGUAY",
    "PROGRAMADOR",
];

export const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};
