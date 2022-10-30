import Room from "../src/modules/room";
import { AvailableStatus, OccupiedStatus, RepairStatus, VacantStatus } from "../src/modules/roomStatus";

describe("testing RoomStatus", () => {
  describe("testing AvailableStatus room", () => {
    let room = new Room("testing");
    let roomStatusInstance = new AvailableStatus(room);
    it("should throw error when trying to change status to available", () => {
      expect(roomStatusInstance.setAvailable).toThrow("Currently room is available");
    });
    it("should successfully change status when trying to change status to occupied", () => {
      roomStatusInstance.setOccupied();
      expect(room.isOccupied()).toBe(true);
    });
    it("should throw error when trying to change status to repair", () => {
      expect(roomStatusInstance.setRepair).toThrow("Room cannot be change to repair status while available");
    });
    it("should throw error when trying to change status to vacant", () => {
      expect(roomStatusInstance.setVacant).toThrow("Room cannot be change to vacant status while available");
    });
  });

  describe("testing OccupiedStatus room", () => {
    let room = new Room("testing");
    let roomStatusInstance = new OccupiedStatus(room);
    it("should throw error when trying to change status to available", () => {
      expect(roomStatusInstance.setAvailable).toThrow("Room cannot be change to available status while occupied");
    });
    it("should throw error when trying to change status to occupied", () => {
      expect(roomStatusInstance.setOccupied).toThrow("Currently room is occupied");
    });
    it("should throw error when trying to change status to repair", () => {
      expect(roomStatusInstance.setRepair).toThrow("Room cannot be change to repair status while occupied");
    });
    it("should successfully change status when trying to change status to vacant", () => {
      roomStatusInstance.setVacant();
      expect(room.isVacant()).toBe(true);
    });
  });

  describe("testing RepairStatus room", () => {
    let room = new Room("testing");
    let roomStatusInstance = new RepairStatus(room);
    it("should throw error when trying to change status to available", () => {
      expect(roomStatusInstance.setAvailable).toThrow("Room cannot be change to available status while repair");
    });
    it("should throw error when trying to change status to occupied", () => {
      expect(roomStatusInstance.setOccupied).toThrow("Room cannot be change to occupied status while repair");
    });
    it("should throw error when trying to change status to repair", () => {
      expect(roomStatusInstance.setRepair).toThrow("Currently room is repair");
    });
    it("should successfully change status when trying to change status to vacant", () => {
      roomStatusInstance.setVacant();
      expect(room.isVacant()).toBe(true);
    });
  });

  describe("testing VacantStatus room", () => {
    let room = new Room("testing");
    let roomStatusInstance = new VacantStatus(room);
    it("should successfully change status when trying to change status to available", () => {
      roomStatusInstance.setAvailable();
      expect(room.isAvailable()).toBe(true);
    });
    it("should successfully change status when trying to change status to occupied", () => {
      expect(roomStatusInstance.setOccupied).toThrow("Room cannot be change to occupied status while vacant");
    });
    it("should successfully change status when trying to change status to repair", () => {
      roomStatusInstance.setRepair();
      expect(room.isRepair()).toBe(true);
    });
    it("should throw error when trying to change status to vacant", () => {
      expect(roomStatusInstance.setVacant).toThrow("Currently room is vacant");
    });
  });
});
