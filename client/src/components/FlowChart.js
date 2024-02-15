
import React, { Fragment } from "react";
import { useState, useCallback } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges, Controls, Background, MiniMap} from 'react-flow-renderer';

import '../assets/stylesheets/FlowChart.css'

const initialEdges = [{ id: 'e1-2', source: '1', target: '2'}];

const initialNodes = [
    {
      id: '1',
      data: {label: 'Node 1'},
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
        id: '2',
        data: {label: 'Node 2'},
        position: {x: 100, y: 100},

    },
  ];
  const CustomNode = ({ id, data }) => {
    return (
      <div style={{ border: '1px solid #000', borderRadius: '8px', padding: '8px', backgroundColor: '#fff' }}>
        {data.label}
      </div>
    );
  };

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [name, setName] = useState("")
    const [edges, setEdges] = useState(initialEdges);

    const addNode = () => {
      setNodes (e => e.concat({
        id: (e.length+1).toString(),
        data:{label: `${name}`},
        position: {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}
      }))
    }

return (
  <div className="flow-container"  style = {{ height: '600px', width: '100%' }} >

     <ReactFlow 
      edges={initialEdges}
      nodes={initialNodes}>
  
      <MiniMap 
      nodeColor= {n=>{
        if( n.type === 'input') return 'blue';

        return '#FFCC00'
      }}
      />
      <Controls className="custom-controls" /> 
          </ReactFlow>
          <div>
          <input type="text"
          onChange={e => setName(e.target.value)}
          name="title"/>
          <button
          onClick={addNode}
          type="button"/>
          </div>

   </div> 

)};

export default Flow;







