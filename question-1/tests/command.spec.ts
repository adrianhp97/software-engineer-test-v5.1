import { CheckInCommand, CheckOutCommand, CleanRoomCommand, RepairRoomCommand, GetAllRoomCommand } from "../src/modules/command";

jest.mock("inquirer", () => {
  return {
    prompt: jest.fn().mockReturnValue({ name: "testing-result" }),
  }
});

const DummyRoomClass: any = function() {
  return {
    getName: jest.fn().mockReturnValue("testing-name"),
  }
}

const DummyBoutiqueClass: any = function () {
  return {
    checkInRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
    checkOutRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
    cleaningRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
    getAllRooms: jest.fn().mockReturnValue([new DummyRoomClass()]),
    getAllOccupiedRooms: jest.fn().mockReturnValue([new DummyRoomClass()]),
    getAllVacantRooms: jest.fn().mockReturnValue([new DummyRoomClass()]),
    printMap: jest.fn(),
    serviceRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
  }
}

describe("testing RoomStatus", () => {
  describe("testing CheckInCommand room", () => {
    const boutiqueInstance = new DummyBoutiqueClass();
    let commandInstance = new CheckInCommand(boutiqueInstance);
    it("should execute correctly", async () => {
      await commandInstance.execute();
      expect(boutiqueInstance.checkInRoom).toHaveBeenCalledTimes(1);
      expect(boutiqueInstance.checkInRoom().getName).toHaveBeenCalledTimes(1);
    });
  });
  describe("testing CheckOutCommand room", () => {
    const boutiqueInstance = new DummyBoutiqueClass();
    let commandInstance = new CheckOutCommand(boutiqueInstance);
    it("should execute correctly", async () => {
      await commandInstance.execute();
      expect(boutiqueInstance.getAllOccupiedRooms).toHaveBeenCalledTimes(1);
      expect(boutiqueInstance.checkOutRoom).toHaveBeenCalledTimes(1);
    });
  });
  describe("testing CleanRoomCommand room", () => {
    const boutiqueInstance = new DummyBoutiqueClass();
    let commandInstance = new CleanRoomCommand(boutiqueInstance);
    it("should execute correctly", async () => {
      await commandInstance.execute();
      expect(boutiqueInstance.getAllVacantRooms).toHaveBeenCalledTimes(1);
      expect(boutiqueInstance.cleaningRoom).toHaveBeenCalledTimes(1);
    });
  });
  describe("testing RepairRoomCommand room", () => {
    const boutiqueInstance = new DummyBoutiqueClass();
    let commandInstance = new RepairRoomCommand(boutiqueInstance);
    it("should execute correctly", async () => {
      await commandInstance.execute();
      expect(boutiqueInstance.getAllVacantRooms).toHaveBeenCalledTimes(1);
      expect(boutiqueInstance.serviceRoom).toHaveBeenCalledTimes(1);
    });
  });
  describe("testing GetAllRoomCommand room", () => {
    const boutiqueInstance = new DummyBoutiqueClass();
    let commandInstance = new GetAllRoomCommand(boutiqueInstance);
    it("should execute correctly", async () => {
      await commandInstance.execute();
      expect(boutiqueInstance.printMap).toHaveBeenCalledTimes(1);
    });
  });
});
