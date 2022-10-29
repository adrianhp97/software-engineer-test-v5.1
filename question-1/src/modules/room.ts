import { RoomStatus } from "../types/room";
import type { Room as RoomInterface } from "../types/room";

class Room implements RoomInterface {
  private name: string;
  private status: RoomStatus;

  constructor(name: string) {
    this.name = name;
    this.status = RoomStatus.Available;
  }

  getName() {
    return this.name
  }

  isAvailable() {
    return this.status === RoomStatus.Available;
  }

  isOccupied() {
    return this.status === RoomStatus.Occupied;
  }

  isRepair() {
    return this.status === RoomStatus.Repair;
  }

  isVacant() {
    return this.status === RoomStatus.Vacant;
  }

  setAvailable() {
    this.status = RoomStatus.Available;
  }

  setOccupied() {
    this.status = RoomStatus.Occupied;
  }

  setRepair() {
    this.status = RoomStatus.Repair;
  }

  setVacant() {
    this.status = RoomStatus.Vacant;
  }

}

export default Room;
