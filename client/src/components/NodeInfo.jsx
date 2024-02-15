import React, { useEffect, useState } from "react";

const NodeInfo = (props) => {

  // All this peace of code, fetches the data to the server, iterates over the data
  //and then is tranfer so is render into the Main display.
  const [nodesList, setNodesList] = useState([]);

  useEffect(() => {
    nodes();
  }, []);

  const nodes = async () => {
    const response = await fetch('http://localhost:3333/metrics');

    setNodesList(await response.json())
  };

  return (
    <div>
      {nodesList.map((data) => {
        return (
          <div>
          <p>{`Name: ${data.name}`}</p>
          <p>{`UID: ${data.uid}`}</p>
          <p>{`Day created: ${data.creationTimestamp}`}</p>
          <p>{`CPU capacity: ${data.capacity.cpuCapacity}`}</p>
          <p>{`Memory capacity: ${data.capacity.memoryCapacity}`}</p>
          <p>{`Pod capacity: ${data.capacity.podsCapacity}`}</p>
          <p>{`Last heartbeat: ${data.presureStatus.lastHeartbeatTime}`}</p>
          <p>{`Kubelet status: ${data.presureStatus.status}`}</p>
          <p>{`Memory pressure: ${data.presureStatus.memoryPressure}`}</p>
          <p>{`Disk pressure: ${data.presureStatus.diskPressure}`}</p>
          <p>{`'PID pressure': ${data.presureStatus.PIDPressure}`}</p>
          <p>{`Total images: ${data.totalImages}`}</p>
          <p>----------------------------------------------------------------</p>

          </div>
        )
      })

      }
    </div>

  );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // The code below will render in the screen the chart that Erika created

  // return (
  //   <div>
  //       <h1>Your Nodes</h1>
  //       <table class='nodes-table'>
  //       <thead>
  //           <tr>
  //           <th>Node (will insert the data pulled from backend)</th>
  //           <th>Name: </th>
  //           <th>CPU/Memory: </th>
  //           <th>Role: </th>
  //           <th>Message Throughput: </th>
  //           <th>Number of Deployments: </th>
  //           <th>Number of Pods: </th>
  //           </tr>
  //       </thead>
  //       <tbody>
  //           <tr>
  //           <td>1 </td>
  //           <td>Erika's Node</td>
  //           <td>56%</td>
  //           <td>The role of the node </td>
  //           <td>The Message Throughput</td>
  //           <td>2 Deployments! </td>
  //           <td>5 pods! </td>
  //           </tr>
  //           {/* <tr class="active-row"> */}
  //           <td>2</td>
  //           <td>Chunky Bean's Node</td>
  //           <td>56%</td>
  //           <td>The role of the node </td>
  //           <td>The Message Throughput</td>
  //           <td>3 Deployments! </td>
  //           <td>7 pods! </td>
  //           {/* </tr> */}
  //           <tr>
  //           <td>3</td>
  //           <td>Peep's Node</td>
  //           <td>70% CPU</td>
  //           <td>The role of the node </td>
  //           <td>The Message Throughput</td>
  //           <td>1 Deployment! </td>
  //           <td>2 pods! </td>
  //           </tr>
  //       </tbody>
  //       </table>
  //   </div>
  //   );


};

export default NodeInfo;
