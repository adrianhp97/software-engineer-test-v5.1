import inquirer from "inquirer";

import type Boutique from "./boutique";

export default abstract class Command {
  protected boutique: Boutique;

  constructor(boutique: Boutique) {
    this.boutique = boutique;
  }

  abstract execute(): Promise<void>;
}

export class CheckInCommand extends Command {
  constructor(boutique: Boutique) {
    super(boutique);
  }

  async execute(): Promise<void> {
    this.boutique.checkInRoom();
  }
}

export class CheckOutCommand extends Command {
  private roomName: string;

  constructor(boutique: Boutique) {
    super(boutique);
    this.roomName = "";
  }

  async execute(): Promise<void> {
    const { boutique } = this;
    const rooms = boutique.getAllOccupiedRooms();
    const questions = [
      {
        name: "name",
        type: "list",
        message: "Please select the room",
        choices: rooms.map(room => room.getName()),
        default: rooms[0],
      }
    ];

    const { name } = await inquirer.prompt(questions);
    this.roomName = name;

    this.boutique.checkOutRoom(this.roomName);
  }
}

export class CleanRoomCommand extends Command {
  private roomName: string;

  constructor(boutique: Boutique) {
    super(boutique);
    this.roomName = "";
  }

  async execute(): Promise<void> {
    const { boutique } = this;
    const rooms = boutique.getAllOccupiedRooms();
    const questions = [
      {
        name: "name",
        type: "list",
        message: "Please select the room",
        choices: rooms.map(room => room.getName()),
        default: rooms[0],
      }
    ];

    const { name } = await inquirer.prompt(questions);
    this.roomName = name;

    this.boutique.cleaningRoom(this.roomName);
  }
}

export class RepairRoomCommand extends Command {
  private roomName: string;

  constructor(boutique: Boutique) {
    super(boutique);
    this.roomName = "";
  }

  async execute(): Promise<void> {
    const { boutique } = this;
    const rooms = boutique.getAllOccupiedRooms();
    const questions = [
      {
        name: "name",
        type: "list",
        message: "Please select the room",
        choices: rooms.map(room => room.getName()),
        default: rooms[0],
      }
    ];

    const { name } = await inquirer.prompt(questions);
    this.roomName = name;

    this.boutique.serviceRoom(this.roomName);
  }
}

export class GetAllRoomCommand extends Command {
  constructor(boutique: Boutique) {
    super(boutique);
  }

  async execute(): Promise<void> {
    this.boutique.getAllRooms();
  }
}
