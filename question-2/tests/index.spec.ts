import Calculator from "../src/modules/calculator";
import { getPreorderArray } from "../src/utils/tree";

describe("Testing calculator", () => {
  it("should sum value correctly", () => {
    const calculator1 = new Calculator("8 + 8");
    calculator1.execute();
    expect(calculator1.getResult()).toBe(16);

    const calculator2 = new Calculator("(8 + 8) * 2");
    calculator2.execute();
    expect(calculator2.getResult()).toBe(32);

    const calculator3 = new Calculator("((15 / (7 - (1 + 1) ) ) * -3 ) - (2 + (1 + 1))");
    calculator3.execute();
    expect(calculator3.getResult()).toBe(-13);
  });

  it("should parse tree correctly", () => {
    const calculator3 = new Calculator("((15 / (7 - (1 + 1) ) ) * -3 ) - (2 + (1 + 1))");
    calculator3.execute();
    expect(getPreorderArray(calculator3.getBinaryTree())).toEqual([
      '-', '*',  '/', '15',
      '-', '7',  '+', '1',
      '1', '-3', '+', '2',
      '+', '1',  '1'
    ]);
  });
});
