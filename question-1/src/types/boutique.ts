import type { Room } from "./room";

export interface Boutique {
  rooms: Room[];

  getAvailableRooms(): Room[];
  reserveRoom(): Room;
  maintainRoom(r: Room);
}
