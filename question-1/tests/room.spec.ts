import Room from "../src/modules/room";
const { AvailableStatus } = require("../src/modules/roomStatus");

jest.mock("../src/modules/roomStatus");

describe("testing Room class", () => {
  let room: Room;

  beforeEach(() => {
    AvailableStatus.mockClear();
    room = new Room("room1");
  });

  it("should have correnct initial state", () => {
    expect(room.getName()).toBe("room1");
    expect(room.isAvailable()).toBe(true);
    expect(room.getStatusCode()).toBe("AV");
  });

  it("should call setAvailable correctly", () => {
    room.setAvailable();
    const instances = AvailableStatus.mock.instances[0];
    expect(instances.setAvailable).toHaveBeenCalledTimes(1);
  });

  it("should call setOccupied correctly", () => {
    room.setOccupied();
    const instances = AvailableStatus.mock.instances[0];
    expect(instances.setOccupied).toHaveBeenCalledTimes(1);
  });

  it("should call setRepair correctly", () => {
    room.setRepair();
    const instances = AvailableStatus.mock.instances[0];
    expect(instances.setRepair).toHaveBeenCalledTimes(1);
  });


  it("should call setVacant correctly", () => {
    room.setVacant();
    const instances = AvailableStatus.mock.instances[0];
    expect(instances.setVacant).toHaveBeenCalledTimes(1);
  });
});
