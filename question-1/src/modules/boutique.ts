import Room from "./room";

import RoomManager from "./roomManager";

import type { BoutiqueInterface } from "../interface/boutique";

class Boutique implements BoutiqueInterface {
  private rooms: Room[][];
  private manager: RoomManager;

  constructor(rooms: Room[][], manager: RoomManager) {
    this.rooms = rooms;
    this.manager = manager;
    this.manager.setBoutique(this);
  }
  
  checkInRoom(): Room {
    const { manager } = this;
    if (manager.hasAvailable()) {
      const room = manager.getNextAvailable();
      room.setOccupied();
      return room;
    }
    throw new Error("No more room available");
  }

  checkOutRoom(name: string) {
    const { manager } = this;
    const room = manager.getRoomByName(name);
    if (room) {
      room.setVacant();
      return;
    }
    throw new Error("No room with provided name");
  }
  
  cleaningRoom(name: string) {
    const { manager } = this;
    const room = manager.getRoomByName(name);
    if (room) {
      room.setAvailable();
      manager.resetAvailable();
      return;
    }
    throw new Error("No room with provided name");
  }

  getAllOccupiedRooms(): Room[] {
    const { manager } = this;
    return manager.getRoomByStatus("occupied");
  }

  getAllVacantRooms(): Room[] {
    const { manager } = this;
    return manager.getRoomByStatus("vacant");
  }
  
  getAllRooms(): Room[][] {
    return this.rooms;
  }

  printMap(): void {
    const { rooms } = this;
    for (const level of rooms) {
      const levelText = level.map((room) => `${room.getName()} - ${room.getStatusCode()}`).join('|');
      console.log(levelText)
      console.log("".padStart(levelText.length, "-"));
    }
  }
  
  serviceRoom(name: string) {
    const { manager } = this;
    const room = manager.getRoomByName(name);
    if (room) {
      room.setRepair();
      return;
    }
    throw new Error("No room with provided name");
  }
}

export default Boutique;
