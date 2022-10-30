import type Room from "../modules/room";

export default abstract class RoomStatus {
  protected room: Room;
  
  constructor(room: Room) {
    this.room = room;
  }

  abstract setAvailable(): void;
  abstract setOccupied(): void;
  abstract setRepair(): void;
  abstract setVacant(): void;
}

export class AvailableStatus extends RoomStatus {
  constructor(room: Room) {
    super(room);
  }
  
  setAvailable(): void {
    throw new Error("Currently room is available");
  }
  
  setOccupied(): void {
    this.room.changeStatus(new OccupiedStatus(this.room));
  }
  
  setRepair(): void {
    throw new Error("Room cannot be change to repair status while available");
  }
  
  setVacant(): void {
    throw new Error("Room cannot be change to vacant status while available");
  }
}

export class OccupiedStatus extends RoomStatus {
  constructor(room: Room) {
    super(room);
  }
  
  setAvailable(): void {
    throw new Error("Room cannot be change to available status while occupied");
  }
  
  setOccupied(): void {
    throw new Error("Currently room is occupied");
  }
  
  setRepair(): void {
    throw new Error("Room cannot be change to repair status while occupied");
  }
  
  setVacant(): void {
    this.room.changeStatus(new VacantStatus(this.room));
  }
}

export class RepairStatus extends RoomStatus {
  constructor(room: Room) {
    super(room);
  }
  
  setAvailable(): void {
    throw new Error("Room cannot be change to available status while repair");
  }
  
  setOccupied(): void {
    throw new Error("Room cannot be change to occupied status while repair");
  }
  
  setRepair(): void {
    throw new Error("Currently room is repair");
  }
  
  setVacant(): void {
    this.room.changeStatus(new VacantStatus(this.room));
  }
}

export class VacantStatus extends RoomStatus {
  constructor(room: Room) {
    super(room);
  }
  
  setAvailable(): void {
    this.room.changeStatus(new AvailableStatus(this.room));
  }
  
  setOccupied(): void {
    throw new Error("Room cannot be change to occupied status while vacant");
  }
  
  setRepair(): void {
    this.room.changeStatus(new RepairStatus(this.room));
  }
  
  setVacant(): void {
    throw new Error("Currently room is vacant");
  }
}
