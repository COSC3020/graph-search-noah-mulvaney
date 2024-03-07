// COSC3020 Graph Search Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 1 Mar 2024

// Automated random testing

// Adapted from https://github.com/COSC3020/graph-representations/blob/main/code.test.js by Lars Kotthoff

const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test = function () {

        let matrix = [[0,1,0,1,0,0],[0,0,1,0,0,0],[0,0,0,0,0,1],[0,0,1,0,1,0],[0,0,1,0,0,1],[0,0,0,0,0,0]];
        if (JSON.stringify(depthFirstSearch(matrix, 0, 0)) != JSON.stringify([0])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 0, 1)) != JSON.stringify([0,1])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 0, 2)) != JSON.stringify([0,1,2])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 0, 3)) != JSON.stringify([0,3])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 0, 4)) != JSON.stringify([0,3,4])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 0, 5)) != JSON.stringify([0,1,2,5])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 1, 3)) != JSON.stringify([])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 1, 5)) != JSON.stringify([0,2,5])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 2, 3)) != JSON.stringify([])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 2, 5)) != JSON.stringify([2,5])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 3, 4)) != JSON.stringify([3,4])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 3, 5)) != JSON.stringify([3,2,5])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 4, 5)) != JSON.stringify([4,5])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 4, 1)) != JSON.stringify([])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 5, 0)) != JSON.stringify([])) return false;
        if (JSON.stringify(depthFirstSearch(matrix, 5, 2)) != JSON.stringify([])) return false;
        
        return true;
    };

jsc.assert(test, { tests: 1 });
