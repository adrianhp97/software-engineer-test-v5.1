import type RoomStatus from "../modules/roomStatus";
import type { BoutiqueInterface } from "./boutique";

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

export interface RoomManagerInterface {
  setBoutique(boutique: BoutiqueInterface): void; 
}

export interface RoomIteratorInterface {
  getNextAvailable(): RoomInterface;
  hasAvailable(): boolean;
  resetAvailable(): void;
}

export interface RoomFilterInterface {
  getRoomByName(name: string): RoomInterface; 
}
