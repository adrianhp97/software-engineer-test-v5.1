export default class Node {
  private value: string;
  private nodeType: string;
  private left: Node | null;
  private right: Node | null;

  constructor(value: string, nodeType: "operan" | "operator", left: Node | null = null, right: Node | null = null) {
    this.value = value;
    this.nodeType = nodeType;
    this.left = left;
    this.right = right;
  }

  getValue(): string {
    return this.value;
  }

  getLeft(): Node | null {
    return this.left;
  }

  getRight(): Node | null {
    return this.right;
  }

  setValue(value: string): void {
    this.value = value;
  }

  setLeft(left: Node | null): void {
    this.left = left;
  }

  setRight(right: Node | null): void {
    this.right = right;
  }
}
