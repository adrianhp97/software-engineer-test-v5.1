import Boutique from "../src/modules/boutique";

const DummyRoomClass: any = function() {
  return {
    changeStatus: jest.fn().mockReturnValue(true),
    getName: jest.fn().mockReturnValue("testing-name"),
    getStatusCode: jest.fn().mockReturnValue(true),
    isAvailable: jest.fn().mockReturnValue(true),
    isOccupied: jest.fn().mockReturnValue(false),
    isRepair: jest.fn().mockReturnValue(false),
    isVacant: jest.fn().mockReturnValue(false),
    setAvailable: jest.fn(),
    setOccupied: jest.fn(),
    setRepair: jest.fn(),
    setVacant: jest.fn(),
  }
}

const DummyRoomManagerClass: any = function () {
  return {
    setBoutique: jest.fn(),
    getNextAvailable: jest.fn().mockReturnValue(new DummyRoomClass()),
    hasAvailable: jest.fn().mockReturnValue(true),
    resetAvailable: jest.fn(),
    getRoomByName: jest.fn().mockReturnValue(new DummyRoomClass()),
    getRoomByStatus: jest.fn().mockReturnValue([new DummyRoomClass()]),
  }
}

describe("testing RoomManager class", () => {
  let boutique: Boutique;
  let roomManager: any;
  let rooms: any;
  beforeEach(() => {
    roomManager = new DummyRoomManagerClass();
    rooms = [[new DummyRoomClass()]];
    boutique = new Boutique(rooms, roomManager);
  });

  it("should checkInRoom correctly", () => {
    boutique.checkInRoom();
    expect(roomManager.hasAvailable).toHaveBeenCalledTimes(1);
    expect(roomManager.getNextAvailable).toHaveBeenCalledTimes(1);
    expect(roomManager.getNextAvailable.mock.results[0].value.setOccupied).toHaveBeenCalledTimes(1);
  });
  it("should checkOutRoom correctly", () => {
    boutique.checkOutRoom("testing-name");
    expect(roomManager.getRoomByName).toHaveBeenCalledTimes(1);
    expect(roomManager.getRoomByName.mock.results[0].value.setVacant).toHaveBeenCalledTimes(1);
  });
  it("should cleaningRoom correctly", () => {
    boutique.cleaningRoom("testing-name");
    expect(roomManager.getRoomByName).toHaveBeenCalledTimes(1);
    expect(roomManager.getRoomByName.mock.results[0].value.setAvailable).toHaveBeenCalledTimes(1);
    expect(roomManager.resetAvailable).toHaveBeenCalledTimes(1);
  });
  it("should getAllOccupiedRooms correctly", () => {
    boutique.getAllOccupiedRooms();
    expect(roomManager.getRoomByStatus).toHaveBeenCalledTimes(1);
  });
  it("should getAllRooms correctly", () => {
    expect(boutique.getAllRooms()).toHaveLength(1);
    expect(boutique.getAllRooms()[0]).toHaveLength(1);
  });
  it("should serviceRoom correctly", () => {
    boutique.serviceRoom("testing-name");
    expect(roomManager.getRoomByName).toHaveBeenCalledTimes(1);
    expect(roomManager.getRoomByName.mock.results[0].value.setRepair).toHaveBeenCalledTimes(1);
  });
});
