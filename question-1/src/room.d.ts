export enum RoomStatus {
  Available = "Available",
  Occupied = "Occupied",
  Vacant = "Vacant",
  Repair = "Repair",
}

export interface Room {
  name: string;
  status: RoomStatus;

  checkIn(): void;
  checkOut(): void;
  cleaning(): void;
  isAvailable(): boolean;
  isOccupied(): boolean;
  isVacant(): boolean;
  isRepair(): boolean;
  repair(): void;
}
