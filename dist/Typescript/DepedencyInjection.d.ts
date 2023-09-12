declare class GameLoader {
    input: string;
    constructor(input: string);
    load(): void;
}
declare class PlayStationConsole {
    gameLoader: GameLoader;
    constructor(gameLoader: GameLoader);
    play(): void;
}
export declare const playStationsConsole: PlayStationConsole;
export {};
