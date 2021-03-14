import { graphNodeToGridNode } from './conversions';
export const animateVisitedNodes = (visited,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 30; i++) {
        let interval = setInterval( function(){
          if(count<visited.length) {
            if(visited[count][0] === gridStartNode[0] && visited[count][1] === gridStartNode[1]) {
              document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited--StartNode');
            } else if (visited[count][0] === gridDestNode[0] && visited[count][1] === gridDestNode[1]) {
              document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited--DestNode');
            } else {
              document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited');
            }
          }
          count++;
          if(count >= visited.length) {
            clearInterval(interval);
            resolve();
          }
        },30);
      }
    }
  );
}


export const animatePathNodes = (path,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      let interval = setInterval( function(){
        if(count<path.length) {
          if(path[count][0] === gridStartNode[0] && path[count][1] === gridStartNode[1]) {
              document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path--StartNode');
            } else if (path[count][0] === gridDestNode[0] && path[count][1] === gridDestNode[1]) {
              document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path--DestNode');
            } else {
              document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path');
            }
          // document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path');
        }
        count++;
        if(count >= path.length) {
          clearInterval(interval);
          resolve();
        }
      },30);   
    }  
  );
}
