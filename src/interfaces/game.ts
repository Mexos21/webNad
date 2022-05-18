export interface Game {
    id: number;
    name: string;
    state: string; // Finish se refiere a si el juego esta acabado o no, puede ser "Acabado/No Terminado/Jugando"
    platform: string; // platform se refiere a la plataforma en la que se jugo el juego
    year: number; // Year se refiere al año en que se acabo el juego, no es una fecha porque solo se guarda el año
    image: string; // Enlace a la imagen
}