// COSC3020 Graph Search Exercise
// Noah Mulvaney
// 14 Mar 2024

// Debug

let code = require("./code.js");

let matrix = [[0,1,0,1,0,0],[0,0,1,0,0,0],[0,0,0,0,0,1],[0,0,1,0,1,0],[0,0,1,0,0,1],[0,0,0,0,0,0]];

for (let i = 0; i < 6; i++)
  for (let j = 0; j < 6; j++)
    console.log(i, j, "ouput:", JSON.stringify(code.depthFirstSearch(matrix, i, j)));

function test() {
  if (JSON.stringify(code.depthFirstSearch(matrix, 0, 0)) != JSON.stringify([0])) {
    console.log("Test fail", 0);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 0, 1)) != JSON.stringify([0,1])) {
    console.log("Test fail", 1);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 0, 2)) != JSON.stringify([0,1,2])) {
    console.log("Test fail", 2);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 0, 3)) != JSON.stringify([0,3])) {
    console.log("Test fail", 3);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 0, 4)) != JSON.stringify([0,3,4])) {
    console.log("Test fail", 4);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 0, 5)) != JSON.stringify([0,1,2,5])) {
    console.log("Test fail", 5);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 1, 3)) != JSON.stringify([])) {
    console.log("Test fail", 6);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 1, 5)) != JSON.stringify([1,2,5])) {
    console.log("Test fail", 7);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 2, 3)) != JSON.stringify([])) {
    console.log("Test fail", 8);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 2, 5)) != JSON.stringify([2,5])) {
    console.log("Test fail", 9);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 3, 4)) != JSON.stringify([3,4])) {
    console.log("Test fail", 10);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 3, 5)) != JSON.stringify([3,2,5])) {
    console.log("Test fail", 11);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 4, 5)) != JSON.stringify([4,5])) {
    console.log("Test fail", 12);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 4, 1)) != JSON.stringify([])) {
    console.log("Test fail", 13);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 5, 0)) != JSON.stringify([])) {
    console.log("Test fail", 14);
    return false;
  }
  if (JSON.stringify(code.depthFirstSearch(matrix, 5, 2)) != JSON.stringify([])) {
    console.log("Test fail", 15);
    return false;
  }

  return true;
}

console.log("Test", test());

console.log("Debug complete");
