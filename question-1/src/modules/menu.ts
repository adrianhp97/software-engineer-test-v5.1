import inquirer from "inquirer";

import { CheckInCommand, CheckOutCommand, CleanRoomCommand, GetAllRoomCommand, RepairRoomCommand } from "./command";

import { CommandLabels, CommandList } from "../constants/command";

import type Boutique from "./boutique";
import type Command from "./command";

export default class Menu {
  private boutique: Boutique;

  constructor(boutique: Boutique) {
    this.boutique = boutique;
  }
  
  private askMenuList(): Promise<{ command: string }> {
    const questions = [
      {
        name: "command",
        type: "list",
        message: "What you wanna do",
        choices: Object.values(CommandLabels),
        default: CommandLabels[CommandList.CheckInRoom],
      }
    ];
    return inquirer.prompt(questions);
  }

  async run(): Promise<Command | null> {
    const { boutique } = this;
    const { command } = await this.askMenuList();
    switch(command) {
      case CommandLabels[CommandList.CheckInRoom]:
        return new CheckInCommand(boutique);
      case CommandLabels[CommandList.CheckOutRoom]:
        return new CheckOutCommand(boutique);
      case CommandLabels[CommandList.CleanRoom]:
        return new CleanRoomCommand(boutique);
      case CommandLabels[CommandList.RepairRoom]:
        return new RepairRoomCommand(boutique);
      case CommandLabels[CommandList.GetAllRooms]:
        return new GetAllRoomCommand(boutique);
    }

    return null;
  }
}
