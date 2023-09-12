class GameLoader {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  load(): void {
    console.log('Loading...', this.input);
  }
}

class PlayStationConsole {
  gameLoader: GameLoader;

  constructor(gameLoader: GameLoader) {
    this.gameLoader = gameLoader;
  }

  play(): void {
    this.gameLoader.load();
  }
}

const gameLoader = new GameLoader('Need for speed: Underground');
export const playStationsConsole = new PlayStationConsole(gameLoader);
