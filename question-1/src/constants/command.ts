export enum CommandList {
  CheckInRoom = "check_in_room",
  CheckOutRoom = "check_out_room",
  CleanRoom = "clean_room",
  RepairRoom = "repair_room",
  GetAllRooms = "get_all_rooms",
}

export const CommandLabels = {
  [CommandList.CheckInRoom]: "Check in room",
  [CommandList.CheckOutRoom]: "Check out room",
  [CommandList.CleanRoom]: "Clean room",
  [CommandList.RepairRoom]: "Repair room",
  [CommandList.GetAllRooms]: "Get all rooms",
}
