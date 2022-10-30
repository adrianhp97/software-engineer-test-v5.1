import Room from "../src/modules/room";

describe("testing Room class", () => {
  let room: Room;
  beforeEach(() => {
    room = new Room("room1");
  });

  it("should have initial state on initial create", () => {
    expect(room.isAvailable()).toBe(true);
    expect(room.getName()).toBe("room1");
  });

  it("should have occupied status after change it to occupied", () => {
    room.setOccupied();
    expect(room.isAvailable()).toBe(false);
    expect(room.isOccupied()).toBe(true);
  });

  it("should have repair status after change it to repair", () => {
    room.setRepair();
    expect(room.isAvailable()).toBe(false);
    expect(room.isRepair()).toBe(true);
  });

  it("should have vacant status after change it to vacant", () => {
    room.setVacant();
    expect(room.isAvailable()).toBe(false);
    expect(room.isVacant()).toBe(true);
  });

  it("should be able to change status to available", () => {
    room.setVacant();
    expect(room.isAvailable()).toBe(false);
    expect(room.isVacant()).toBe(true);
    room.setAvailable();
    expect(room.isAvailable()).toBe(true);
    expect(room.isVacant()).toBe(false);
  });
});
