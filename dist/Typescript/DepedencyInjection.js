'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.playStationsConsole = void 0;
class GameLoader {
  input;
  constructor(input) {
    this.input = input;
  }
  load() {
    console.log('Loading...', this.input);
  }
}
class PlayStationConsole {
  gameLoader;
  constructor(gameLoader) {
    this.gameLoader = gameLoader;
  }
  play() {
    this.gameLoader.load();
  }
}
const gameLoader = new GameLoader('Need for speed: Underground');
exports.playStationsConsole = new PlayStationConsole(gameLoader);
