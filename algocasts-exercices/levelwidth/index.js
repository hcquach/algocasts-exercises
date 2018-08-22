// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counter = [0];
  const end = "End Level";
  const traversalArray = [root, end];
  console.log(traversalArray);

  while (traversalArray.length > 1) {
    let node = traversalArray.shift();
    if (node === end) {
      counter.push(0);
      traversalArray.push(end);
    }
    else {
      traversalArray.push(...node.children);
      counter[counter.length - 1]++;
    }
  }
  return counter;

}

module.exports = levelWidth;
