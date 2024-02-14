import React, { useEffect, useState } from "react";

const NodeInfo = (props) => {

  const [nodesList, setNodesList] = useState(null);
  const [activeRow, setActiveRow] = useState(null)


  //meant to access the data from metricsController.getNodesList
  // useEffect(() => {
  //   fetch('http://localhost:3333/metrics')
  //     .then((respone) => respone.json())
  //     .then((data) => {

  //       console.log('data ---------->', data);

  //       // setNodesList(data.nodesList); *** Important ??
  //       // return <div>${data.length}</div>
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

//   useEffect(() => {
//     fetch('http://localhost:3333/metrics')
//     .then((response) => response.json())
//     .then((data) => {

//         console.log(data)
//     })
//     .catch((error) => console.log(error));
//   }, []);
  
// };

  // const handleRowClick = (index) => {
  //   //set active row index when a row is clicked
  //   setActiveRow(index);
  // }

  

  return (
    <div>
    {/* {nodesList ? (
      <NodeInfoDisplay nodesList={nodesList} />
    ) : (
      <p>Loading...</p>
    )} */}

    
    {/* When we have the data from backend, we will use something like this to render it to the frontend */}


              {/* {nodesList && nodesList.map((node, index) => (
            <tr key={index}>
              <td>{node.nodeNumber}</td>
              <td>{node.nodeName}</td>
              <td>{node.cpuMemory}</td>
              <td>{node.role}</td>
              <td>{node.messageThroughput}</td>
              <td>{node.numDeployments}</td>
              <td>{node.numPods}</td>
            </tr> */}
    <h1>Your Nodes</h1>
    <table class='nodes-table'>
      <thead>
        <tr>
          <th>Node (will insert the data pulled from backend)</th>
          <th>Name: </th>
          <th>CPU/Memory: </th>
          <th>Role: </th>
          <th>Message Throughput: </th>
          <th>Number of Deployments: </th>
          <th>Number of Pods: </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 </td>
          <td>Erika's Node</td>
          <td>56%</td>
          <td>The role of the node </td>
          <td>The Message Throughput</td>
          <td>2 Deployments! </td>
          <td>5 pods! </td>
        </tr>
        {/* <tr class="active-row"> */}
          <td>2</td>
          <td>Chunky Bean's Node</td>
          <td>56%</td>
          <td>The role of the node </td>
          <td>The Message Throughput</td>
          <td>3 Deployments! </td>
          <td>7 pods! </td>
        {/* </tr> */}
        <tr>
        <td>3</td>
          <td>Peep's Node</td>
          <td>70% CPU</td>
          <td>The role of the node </td>
          <td>The Message Throughput</td>
          <td>1 Deployment! </td>
          <td>2 pods! </td>
        </tr>
      </tbody>
    </table>


  </div>
);
}


export default NodeInfo;
