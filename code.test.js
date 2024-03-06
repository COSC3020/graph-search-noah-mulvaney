// COSC3020 Graph Search Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 1 Mar 2024

// Automated random testing

// Adapted from https://github.com/COSC3020/graph-representations/blob/main/code.test.js by Lars Kotthoff

const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array (pair nat nat)", function(edges) {
        /**
        // create a random matrix
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);
        var mat = [];
        for(var i = 0; i <= max; i++) {
            mat[i] = [];
            for(var j = 0; j <= max; j++) {
                mat[i][j] = 0;
            }
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) mat[i][edges[j][1]] = 1;
            }
        }
        
        let size = mat.length;
        if (size != mat[0].length) return true; // non square matrix, discard

        let start = Math.floor(Math.random() * size);
        let end = Math.floor(Math.random() * size);

        let path = depthFirstSearch(mat, start, end);
        let last = path.length - 1;
        
        if (path == []) return true; // no further tests

        // check correct start and end
        if (path[0] != start || path[last] != end) return false;

        // check if path is connected
        for (let i = 1; i < path.length; i++)
            if (mat[path[i - 1]][path[i]] != 1) return false;
        **/

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
    });
jsc.assert(test, { tests: 1000 });
