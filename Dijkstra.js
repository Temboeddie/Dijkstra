function dijkstra(graph, start) {
  const INF = Number.MAX_SAFE_INTEGER;
  const distance = {};
  const visited = {};

  // Initialize distances and visited flags
  for (let vertex in graph) {
    distance[vertex] = INF;
    visited[vertex] = false;
  }

  // Distance from the start vertex to itself is 0
  distance[start] = 0;

  // Dijkstra's algorithm
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    const currentVertex = minDistanceVertex(distance, visited);

    visited[currentVertex] = true;

    // Update distances of neighboring vertices
    for (let neighbor in graph[currentVertex]) {
      const edgeWeight = graph[currentVertex][neighbor];
      const totalWeight = distance[currentVertex] + edgeWeight;

      if (totalWeight < distance[neighbor]) {
        distance[neighbor] = totalWeight;
      }
    }
  }

  return distance;
}

function minDistanceVertex(distance, visited) {
  let min = Number.MAX_SAFE_INTEGER;
  let minVertex = null;

  for (let vertex in distance) {
    if (!visited[vertex] && distance[vertex] <= min) {
      min = distance[vertex];
      minVertex = vertex;
    }
  }

  return minVertex;
}

// Example usage:
const graph = {
  A: { B: 2, C: 4 },
  B: { A: 2, C: 1 },
  C: { A: 4, B: 1 },
};

const startVertex = 'A';
const distances = dijkstra(graph, startVertex);

console.log(`Shortest distances from vertex ${startVertex}: `, distances);
