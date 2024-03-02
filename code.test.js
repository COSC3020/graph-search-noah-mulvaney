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
        
        let size = mat[0].length;
        let start = Math.floor(Math.random() * size);
        let end = Math.floor(Math.random() * size);

        let path = depthFirstSearch(mat, start, end);

        // check correct start and end
        if (path[0] != start || path[-1] != end) return false;

        // check if path is connected
        for (let i = 1; i < path.length; i++)
            if (mat[path[i - 1]][path[i]] != 1) return false;

        return true
    });
jsc.assert(test, { tests: 1000 });
