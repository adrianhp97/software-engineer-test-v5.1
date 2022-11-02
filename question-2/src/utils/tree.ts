import Node from "../modules/node";

export const getPreorderArray = (root: Node | null): (string | null)[] => {
  if (!root) return [];
  const left = getPreorderArray(root.getLeft());
  const right = getPreorderArray(root.getRight());
  return [root.getValue(), ...left, ...right];
}
