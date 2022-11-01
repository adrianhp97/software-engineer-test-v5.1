import Node from "./node";

export default class Calculator {
  private equation: string;
  private result: number;
  private root: Node | null;

  constructor(equation: string) {
    this.equation = equation;
    this.result = 0;
    this.root = null;
  }

  execute(): void {

  }

  getComparatorPoin(operator: string): number {
    if (operator === "*" || operator === "/") return 10;
    if (operator === "+" || operator === "-") return 1;
    return 0;
  }

  getResult(): number {
    return this.result;
  }

  getOperatorIdx(startIdx: number, endIdx: number): number {
    return 0;
  }

  isOperator(value: string): boolean {
    return ["+", "-", "*", "/"].includes(value);
  }

  parseEquation(startIdx: number, endIdx: number): Node | null {
    return null;
  }

  printTree(): void {

  }
}