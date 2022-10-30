import type RoomStatus from "../modules/roomStatus";

export interface RoomInterface {
  changeStatus(status: RoomStatus): void;
  getName(): string;
  isAvailable(): boolean;
  isOccupied(): boolean;
  isRepair(): boolean;
  isVacant(): boolean;
  setAvailable(): void;
  setOccupied(): void;
  setRepair(): void;
  setVacant(): void;
}
