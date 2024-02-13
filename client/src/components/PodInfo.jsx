import React, { useEffect, useState } from "react";

const PodInfo = (props) => {

  const [nodesList, setNodesList] = useState(null);

  //meant to access the data from metricsController.getNodesList
  useEffect(() => {
    fetch("/metrics")
      .then((data) => data.json())
      .then(data => {
        console.log(data);
        setNodesList(data.nodesList);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    {/* {nodesList ? (
      <NodeInfoDisplay nodesList={nodesList} />
    ) : (
      <p>Loading...</p>
    )} */}
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
        <tr class="active-row">
          <td>2</td>
          <td>Chunky Bean's Node</td>
          <td>56%</td>
          <td>The role of the node </td>
          <td>The Message Throughput</td>
          <td>3 Deployments! </td>
          <td>7 pods! </td>
        </tr>
        <tr>
        <td>2</td>
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
};

export default PodInfo;
