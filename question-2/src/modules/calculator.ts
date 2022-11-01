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
    this.root = this.parseEquation(0, this.equation.length - 1);
  }

  private getComparatorPoin(operator: string): number {
    if (operator === "*" || operator === "/") return 10;
    if (operator === "+" || operator === "-") return 1;
    return 0;
  }

  getResult(): number {
    return this.result;
  }

  private getOperanValue(startIdx: number, endIdx: number): number {
    const { equation } = this;

    let operan = 0;
    
    for (let idx = startIdx; idx <= endIdx; idx++) {
      if (!isNaN(+equation[idx])) {
        operan *= 10;
        operan += +equation[idx];
      }
    }

    return operan;
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
      if (this.isOperator(currCharacter)) {
        if (operatorIdx === -1) {
          operatorIdx = idx;
          currentOperator = currCharacter;
        } else {
          const currOperatorPoin = this.getComparatorPoin(currentOperator) + (stack.length * 10);
          const currCharacterPoin = this.getComparatorPoin(currCharacter);
          if (currCharacterPoin < currOperatorPoin) {
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
    const operatorIdx = this.getOperatorIdx(startIdx, endIdx);
    if (operatorIdx === -1) {
      return new Node(this.getOperanValue(startIdx, endIdx));
    }
    const left = this.parseEquation(startIdx, operatorIdx - 1);
    const right = this.parseEquation(operatorIdx + 1, endIdx);
    return new Node(operatorIdx, left, right);
  }

  printTree(node: Node | null, depth: number = 0): void {
    const root = node || this.root;
    console.log(`${"".padStart(depth * 2, "-")}${root?.getValue()}`);
    this.printTree(root?.getLeft() || null, depth + 1);
    this.printTree(root?.getRight() || null, depth + 1);
  }
}
