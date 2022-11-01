export default class Node {
  private value: string | number;
  private left: Node | null;
  private right: Node | null;

  constructor(value: string | number, left: Node | null = null, right: Node | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  getValue(): string | number {
    return this.value;
  }

  getLeft(): Node | null {
    return this.left;
  }

  getRight(): Node | null {
    return this.right;
  }

  setValue(value: string | number): void {
    this.value = value;
  }

  setLeft(left: Node | null): void {
    this.left = left;
  }

  setRight(right: Node | null): void {
    this.right = right;
  }
}
