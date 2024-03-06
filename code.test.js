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
        if (depthFirstSearch(matrix, 0, 0) != [0]) return false;
        if (depthFirstSearch(matrix, 0, 1) != [0,1]) return false;
        if (depthFirstSearch(matrix, 0, 2) != [0,1,2]) return false;
        if (depthFirstSearch(matrix, 0, 3) != [0,3]) return false;
        if (depthFirstSearch(matrix, 0, 4) != [0,3,4]) return false;
        if (depthFirstSearch(matrix, 0, 5) != [0,1,2,5]) return false;
        if (depthFirstSearch(matrix, 1, 3) != []) return false;
        if (depthFirstSearch(matrix, 1, 5) != [0,2,5]) return false;
        if (depthFirstSearch(matrix, 2, 3) != []) return false;
        if (depthFirstSearch(matrix, 2, 5) != [2,5]) return false;
        if (depthFirstSearch(matrix, 3, 4) != [3,4]) return false;
        if (depthFirstSearch(matrix, 3, 5) != [3,2,5]) return false;
        if (depthFirstSearch(matrix, 4, 5) != [4,5]) return false;
        if (depthFirstSearch(matrix, 4, 1) != []) return false;
        if (depthFirstSearch(matrix, 5, 0) != []) return false;
        if (depthFirstSearch(matrix, 5, 2) != []) return false;
        
        return true;
    };

jsc.assert(test, { tests: 1 });
