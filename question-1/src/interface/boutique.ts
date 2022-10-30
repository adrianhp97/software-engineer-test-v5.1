import type Room from "../modules/room";

export interface BoutiqueInterface {
  checkInRoom(): Room;
  checkOutRoom(name: string): void;
  cleaningRoom(name: string): void;
  getAllRooms(): Room[][];
  serviceRoom(name: string): void;
}