import { AvailableStatus, OccupiedStatus, RepairStatus, VacantStatus } from "./roomStatus";

import type { RoomInterface } from "../interface/room";
import type RoomStatus from "./roomStatus";

class Room implements RoomInterface {
  private name: string;
  private status: RoomStatus;

  constructor(name: string) {
    this.name = name;
    this.status = new AvailableStatus(this);
  }

  changeStatus(status: RoomStatus): void {
    this.status = status;
  }

  getName(): string {
    return this.name
  }

  isAvailable(): boolean {
    return this.status instanceof AvailableStatus;
  }

  isOccupied(): boolean {
    return this.status instanceof OccupiedStatus;
  }

  isRepair(): boolean {
    return this.status instanceof RepairStatus;
  }

  isVacant(): boolean {
    return this.status instanceof VacantStatus;
  }

  setAvailable(): void {
    this.status.setAvailable();
  }

  setOccupied(): void {
    this.status.setOccupied();
  }

  setRepair(): void {
    this.status.setRepair();
  }

  setVacant(): void {
    this.status.setVacant();
  }

}

export default Room;
