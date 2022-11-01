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

  private getComparatorPoin(operator: string): number {
    if (operator === "*" || operator === "/") return 10;
    if (operator === "+" || operator === "-") return 1;
    return 0;
  }

  getResult(): number {
    return this.result;
  }

  private getOperatorIdx(startIdx: number, endIdx: number): number {
    const { equation } = this;

    let operatorIdx = -1;
    let stack = [];
    let currentOperator = "";
    for (let idx = startIdx; idx <= endIdx; idx++) {
      const currCharacter = equation[idx];
      if (currCharacter === "(") {
        stack.push(currCharacter);
        continue;
      }
      if (currCharacter === ")") {
        stack.pop();
        continue;
      }
      if (stack.length > 0) continue;
      if (this.isOperator(currCharacter)) {
        if (operatorIdx === -1) {
          operatorIdx = idx;
          currentOperator = currCharacter;
        } else {
          if (this.getComparatorPoin(currentOperator) > this.getComparatorPoin(currCharacter)) {
            operatorIdx = idx;
            currentOperator = currCharacter;
          }
        }
      } 
    }
    return operatorIdx;
  }

  private isOperator(value: string): boolean {
    return ["+", "-", "*", "/"].includes(value);
  }

  private parseEquation(startIdx: number, endIdx: number): Node | null {
    return null;
  }

  printTree(): void {

  }
}