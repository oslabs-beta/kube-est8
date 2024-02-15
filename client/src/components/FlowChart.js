
import React, { Fragment } from "react";
import { useState, useCallback } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges, Controls, Background } from 'reactflow';

import '../assets/stylesheets/FlowChart.css'

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label: 'got to', type: 'straight' }];

const initialNodes = [
    {
      id: '1',
      data: {label: 'Node'},
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
        id: '2',
        data: {label: 'Node'},
        position: {x: 100, y: 100},

    },
  ];

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const handleNodeAdd = () => {
    const newNodeId = (nodes.length + 1).toString();
    const newNode = {
      id: newNodeId,
      data: { label: `Node ${newNodeId}` },
      position: { x: Math.random() * 500, y: Math.random() * 500 }
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };
  const handleEdgeAdd = () => {
    const newEdgeId = `${nodes.length}-${nodes.length + 1}`;
    const newEdge = {
      id: newEdgeId,
      source: nodes[nodes.length - 1].id,
      target: (nodes.length + 1).toString(),
      label: "New edge",
      type: "smoothstep"
    };
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };
  const handleNodeRemove = (id) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.source !== id && edge.target !== id));
  };
  

return (
  <div className="flow-container"  style = {{ height: '600px', width: '100%' }} >

     <ReactFlow  nodes = {initialNodes} edges={initialEdges} >
          <Background className="custom-background"/> 
      <Controls className="custom-controls" /> 
          </ReactFlow>
          <button onClick={handleNodeAdd}>Add Node</button>
          <button onClick={handleEdgeAdd}>Add Edge</button>

   </div> 

)
 
};

export default Flow;



// return (
//   <div className="flow-container" style={{ height: "600px", width: "100%" }}>
//     <ReactFlow 
//     elements={nodes.concat(edges)} onNodeDoubleClick={(event, node) => handleNodeRemove(node.id)}>
//       <Background className="custom-background" />
//       <Controls className="custom-controls" />
//     </ReactFlow>
    // <button onClick={handleNodeAdd}>Add Node</button>
    // <button onClick={handleEdgeAdd}>Add Edge</button>
//   </div>
// );


  // return (
  //     <div className="flow-container"  style = {{ height: '600px', width: '100%' }} >

  //         <ReactFlow  nodes = {initialNodes} 
  //         onNodesChange = {onNodesChange}
  //         edges = {initialEdges}
  //         onEdgesChange = {onEdgesChange}
  //         >
  //         {/* <Background className="custom-background"/> */}
  //         <Controls className="custom-controls" /> 
  //         </ReactFlow>

  //     </div>
      
  // );

