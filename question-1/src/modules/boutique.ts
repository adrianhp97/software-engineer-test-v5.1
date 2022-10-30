import Room from "./room";

import type { BoutiqueInterface } from "../interface/boutique";
import RoomManager from "./roomManager";

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
    }
    throw new Error("No room with provided name");
  }
  
  cleaningRoom(name: string) {
    const { manager } = this;
    const room = manager.getRoomByName(name);
    if (room) {
      room.setAvailable();
      manager.resetAvailable();
    }
    throw new Error("No room with provided name");
  }
  
  getAllRooms(): Room[][] {
    return this.rooms;
  }
  
  serviceRoom(name: string) {
    const { manager } = this;
    const room = manager.getRoomByName(name);
    if (room) {
      room.setRepair();
    }
    throw new Error("No room with provided name");
  }
}

export default Boutique;
