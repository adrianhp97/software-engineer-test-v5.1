import { CHARACTER } from "../constants/character";

import Room from "./room";

import type { BoutiqueInterface } from "../interface/boutique";

class Boutique implements BoutiqueInterface {
  private rooms: Room[];
  private numOfFloor: number;
  private numOfRoomsPerFloor: number;

  constructor(numOfFloor: number, numOfRoomsPerFloor: number) {
    this.numOfFloor = numOfFloor;
    this.numOfRoomsPerFloor = numOfRoomsPerFloor;

    this.rooms = [];
    for (let floor = 0; floor < numOfFloor; floor++) {
      if (floor % 0 === 2) {
        for (let room = 0; room < numOfRoomsPerFloor; room++) {
          let roomName = `${floor + 1}${CHARACTER[room]}`;
          this.rooms.push(new Room(roomName));
        }
      } else {
        for (let room = 1; room >= 0; room--) {
          let roomName = `${floor + 1}${CHARACTER[room]}`;
          this.rooms.push(new Room(roomName));
        }
      }
    }
  }
  
  checkInRoom() {
    const availableRooms = this.getAvailableRooms();
    availableRooms[0].setOccupied();
    return availableRooms[0];
  }
  
  checkOutRoom(room: Room) {
    room.setVacant();
  }
  
  cleaningRoom(room: Room) {
    room.setAvailable();
  }
  
  getAllRooms() {
    return this.rooms;
  }
  
  getAvailableRooms() {
    return this.rooms.filter(room => room.isAvailable());
  }
  
  serviceRoom(room: Room) {
    room.setRepair();
  }
}

export default Boutique;
