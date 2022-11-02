import RoomManager from "../src/modules/roomManager";

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

const DummyBoutiqueClass: any = function () {
  return {
    checkInRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
    checkOutRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
    cleaningRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
    getAllRooms: jest.fn().mockReturnValue([[new DummyRoomClass()]]),
    getAllOccupiedRooms: jest.fn().mockReturnValue([new DummyRoomClass()]),
    getAllVacantRooms: jest.fn().mockReturnValue([new DummyRoomClass()]),
    printMap: jest.fn(),
    serviceRoom: jest.fn().mockReturnValue(new DummyRoomClass()),
  }
}

describe("testing RoomManager class", () => {
  let boutique: any;
  let roomManager: RoomManager;
  beforeEach(() => {
    boutique = new DummyBoutiqueClass();
    roomManager = new RoomManager();
    roomManager.setBoutique(boutique);
  });

  it("should get available room", () => {
    expect(roomManager.hasAvailable()).toBe(true);
    const room = roomManager.getNextAvailable();
    expect(roomManager.hasAvailable()).toBe(false);
  });

  it("should get room filtered available", () => {
    expect(roomManager.getRoomByStatus("available")).toHaveLength(1);
  });
  it("should get room filtered occupied", () => {
    expect(roomManager.getRoomByStatus("occupied")).toHaveLength(0);
  });
  it("should get room filtered available", () => {
    expect(roomManager.getRoomByStatus("repair")).toHaveLength(0);
  });
  it("should get room filtered available", () => {
    expect(roomManager.getRoomByStatus("vacant")).toHaveLength(0);
  });
  it("should get room by name", () => {
    expect(roomManager.getRoomByName("testing-test")).toBeNull();
    expect(roomManager.getRoomByName("testing-name")).not.toBeNull();
  });
});
