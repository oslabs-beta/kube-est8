
import React from "react";
import ReactFlow, { Controls, Background } from 'reactflow';
// import 'reactflow/dist/style.css';
import './assets/stylesheets/FlowChart.css'

const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

const nodes = [
    {
      id: '1',
      data: {label: 'Hello'},
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
        id: '2',
        data: {label: 'World'},
        position: {x: 100, y: 100},

    },
  ];

function Flow() {
    return (
        <div className="flow-container">

            <ReactFlow  nodes = {nodes} edges = {edges}
            style = {{ width : '100%'}}>
            {/* <Background className="custom-background" /> */}
            {/* <Controls className="custom-controls" /> */}
            </ReactFlow>

        </div>
        
    );
};

export default Flow;




