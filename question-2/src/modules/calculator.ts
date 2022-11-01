import Node from "./node";

type Token = {
  label: "operator" | "operan" | "bracket";
  value: string;
}
export default class Calculator {
  private equation: string;
  private equationToken: Token[];
  private result: number;
  private root: Node | null;

  constructor(equation: string) {
    this.equation = equation;
    this.result = 0;
    this.root = null;
    this.equationToken = [];
  }

  private calculateResult(node?: Node | null): number {
    let root = node;
    if (node === undefined) {
      root = this.root;
    }

    if (!root) return 0;

    const value = root!.getValue();
    if (this.isOperator(value)) {
      const leftOperan = this.calculateResult(root?.getLeft());
      const righOperan = this.calculateResult(root?.getRight());
      if (value === "+") return leftOperan + righOperan;
      if (value === "-") return leftOperan - righOperan;
      if (value === "/") return leftOperan / righOperan;
      if (value === "*") return leftOperan * righOperan;
    }

    return +value;
  }

  execute(): void {
    this.setupEquationToken();
    this.root = this.parseEquation(0, this.equationToken.length - 1);
    this.result = this.calculateResult();
  }

  private getComparatorPoin(operator: string): number {
    if (operator === "*" || operator === "/") return 10;
    if (operator === "+" || operator === "-") return 1;
    return 0;
  }

  getResult(): number {
    return this.result;
  }

  private getOperanValue(startIdx: number, endIdx: number): string {
    const { equationToken } = this;
    
    if (equationToken[startIdx].label === "operan") return equationToken[startIdx].value;
    return equationToken[endIdx].value;;
  }

  private getOperatorIdx(startIdx: number, endIdx: number): number {
    const equation = this.equationToken;

    let operatorIdx = -1;
    let stack = [];
    let currOperator = "";
    let currOperatorPoin = 0;
    for (let idx = startIdx; idx <= endIdx; idx++) {
      const currCharacter = equation[idx];
      if (currCharacter.value === "(") {
        stack.push(currCharacter);
        continue;
      }
      if (currCharacter.value === ")") {
        stack.pop();
        continue;
      }
      if (currCharacter.label === "operator") {
        if (operatorIdx === -1) {
          operatorIdx = idx;
          currOperator = currCharacter.value;
          currOperatorPoin = this.getComparatorPoin(currOperator) + (stack.length * 100);
        } else {
          const currCharacterPoin = this.getComparatorPoin(currCharacter.value) + (stack.length * 100);
          if (currCharacterPoin < currOperatorPoin) {
            operatorIdx = idx;
            currOperator = currCharacter.value;
            currOperatorPoin = this.getComparatorPoin(currOperator) + (stack.length * 100);
          }
        }
      } 
    }

    return operatorIdx;
  }

  private isOperator(value: string): boolean {
    return ["+", "-", "*", "/"].includes(value);
  }

  isValidCharacter(): boolean {
    const rule = new RegExp(/^[\s+-/()*0-9]+$/);
    return rule.test(this.equation);
  }

  private setupEquationToken() {
    const equation = this.equation.replace(/ /g, "");

    let token: Token[] = [];
    let idx = 0;
    while (idx < equation.length) {
      if (["(", ")"].includes(equation[idx])) {
        token.push({ value: equation[idx], label: "bracket" });
        idx++;
      } else if (token.length > 0 && token[token.length - 1].label !== "operator" && this.isOperator(equation[idx])) {
        token.push({ value: equation[idx], label: "operator" });
        idx++;
      } else {
        let operan = "";
        while ((operan === "" && this.isOperator(equation[idx])) || !isNaN(parseInt(equation[idx]))) {
          operan += equation[idx];
          idx++;
        }
        token.push({ value: operan, label: "operan" });
      }
    }

    this.equationToken = token;
  }

  private parseEquation(startIdx: number, endIdx: number): Node | null {
    const operatorIdx = this.getOperatorIdx(startIdx, endIdx);
    if (operatorIdx === -1) {
      const operan = this.getOperanValue(startIdx, endIdx);
      return new Node(operan, "operan");
    }
    const left = this.parseEquation(startIdx, operatorIdx - 1);
    const right = this.parseEquation(operatorIdx + 1, endIdx);
    return new Node(this.equationToken[operatorIdx].value, "operator", left, right);
  }

  printTree(node?: Node | null, depth: number = 0): void {
    let root = node;
    if (node === undefined) {
      root = this.root;
    }
    if (!root) return;
    console.log(`${"".padStart(depth * 2, " ")}${root?.getValue()}`);
    this.printTree(root?.getLeft() || null, depth + 1);
    this.printTree(root?.getRight() || null, depth + 1);
  }
}
