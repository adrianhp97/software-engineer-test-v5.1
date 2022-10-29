export enum RoomStatus {
  Available = "Available",
  Occupied = "Occupied",
  Vacant = "Vacant",
  Repair = "Repair",
}

export interface Room {
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
