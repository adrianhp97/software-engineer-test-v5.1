import type Boutique from "./boutique";
import type Room from "./room";

import type { RoomIteratorInterface, RoomFilterInterface, RoomManagerInterface } from "../interface/room";

export default class RoomManager implements RoomManagerInterface, RoomIteratorInterface, RoomFilterInterface {
  private boutique: Boutique;

  private availableRooms: Room[];
  private roomIndexes: Record<string, number>;

  getNextAvailable(): Room {
    const room = this.availableRooms.pop();
    return room;
  }

  getRoomByName(name: string): Room {
    if (!this.boutique) return;
    const rooms = this.boutique.getAllRooms().flat();
    return rooms.find((room) => room.getName() === name);
  }

  hasAvailable(): boolean {
    return this.availableRooms.length > 0;
  }

  resetAvailable() {
    if (!this.boutique) return;
    const rooms = this.boutique.getAllRooms();

    let index = 0;
    this.availableRooms = [];
    for (let level = 0; level < rooms.length; level++) {
      if (level % 2 === 0) {
        for (let roomIdx = 0; roomIdx < rooms[level].length; roomIdx++) {
          const room = rooms[level][roomIdx];
          if (room.isAvailable()) {
            this.availableRooms.push(room);
          }
          this.roomIndexes[room.getName()] = index;
          index++;
        }
      } else {
        for (let roomIdx = rooms[level].length - 1; roomIdx >= 0; roomIdx--) {
          const room = rooms[level][roomIdx];
          if (room.isAvailable()) {
            this.availableRooms.push(room);
          }
          this.roomIndexes[room.getName()] = index;
          index++;
        }
      }
    }
  }

  setBoutique(boutique: Boutique): void {
    this.boutique = boutique;
    this.resetAvailable();
  }
}
