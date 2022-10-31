import Boutique from "./boutique";
import Menu from "./menu";
import Room from "./room";
import RoomManager from "./roomManager";

import { CHARACTER } from "../constants/character";
export default class Main {
  private boutique: Boutique;
  private rooms: Room[][];
  private roomManager: RoomManager;
  private menu: Menu;

  constructor() {
    this.rooms = [];

    for (let floor = 1; floor <= 4; floor++) {
      this.rooms.push([]);
      for (let roomId = 0; roomId < 5; roomId++) {
        this.rooms[floor - 1]?.push(new Room(`${floor}${CHARACTER[roomId]}`));
      }
    }

    this.roomManager = new RoomManager();
    this.boutique = new Boutique(this.rooms, this.roomManager);
    this.menu = new Menu(this.boutique);
  }

  async main() {
    while (true) {
      const command = await this.menu.run();
      await command?.execute();
    }
  }
}
