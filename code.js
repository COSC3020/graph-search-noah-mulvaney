// COSC3020 Graph Search Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 1 Mar 2024

// Depth First Search of Graph (Adjacency Matrix)
function depthFirstSearch(graph, start, target) {
    let visit = []; // nodes to visit stack
    let path = []; // visited vertices
    let i = start; // current node

    // really simple fast cases
    if (graph[start][target] == 1) {
        if (start != target) return [start, target];
        else return [start];
    }

    // find the target, depth first search
    while (i != target) {
        path.push(i);

        // add adjacent vertices to stack
        for (let j = graph[0].length - 1; j >= 0; j--) 
            if (graph[i][j] == 1 && path.indexOf(j) == -1) visit.push(j);

        // select next vertex
        i = visit.pop();
        if (i == undefined) return []; // stack exhausted, not path found
    }
    path.push(target);

    // reduce to get a more direct path
    let dir_path = [target]; // direct path from start to target
    for (let j = path.length - 2; j > 0; j--) {
        if (graph[path[j]][dir_path[0]] == 1) dir_path.unshift(path[j]);
        if (graph[start][path[j]] != 0) break;
    }
    if (start != target) dir_path.unshift(start);

    return(dir_path);
}

module.exports = {depthFirstSearch};
