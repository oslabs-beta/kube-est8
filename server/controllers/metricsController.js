//import Kubernetes API client package
const k8s = require('@kubernetes/client-node');

//making new kube config instance
const kc = new k8s.KubeConfig();

//loading the info from kube config file on your local device
//adding the info to the variable kc
//loadFromDefault is native built in method of kubenetes API client package
kc.loadFromDefault();

//creating API Client. What will be used to communicate with the control plane of kubernetes cluster
//makeApiClient is native built in method of kubenetes API client package
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

//Initial middleware object
const metricsController = {};

// // adding method to metricsController
// metricsController.getNodeList = async(req, res, next) => {

//   try {

//     //.listNode is an API client method (native built in method)
//     const nodesList = await k8sApi.listNode();
//     // console.log('NodeList -------->', nodesList);

//     // const nodesArr = nodesList.body.items;

//     let numOfNodes = nodesList.body.items.length;


//     // TODO: Keep playing with the nodesList.body.items and/or nodeList....
//     // To get importan information from each node like
//       // UID
//       // Namespace
//     console.log('numOfNodes.body.items -------------------->', nodesList.body.items[0])

//     res.locals.nodesList = {
//       numOfNodes
//     };

//     return next();

//     // ** TODO **
//     //for each node: 
//     //CPU/Memory:
//     //Name:
//     //Role:
//     //Message throughput:
//     //number of deployment:
//     //number of pods:

//     //find method for accessing number of pods
//     // let numOfPods;
//     //find method for accessing number of deployments
//     // let numOfDeployments;


//     // const test = await k8s.topNodes(k8sApi);
//     // console.log(test, 'test');

//     // const metricsClient = new k8s.Metrics(kc)
//     // const nodeMetrics = await metricsClient.getNodeMetrics();
//     // console.log(nodeMetrics, 'node metrics');

    
//   } catch (err) {
//     console.error(err);
//   }

// }



metricsController.getNodeList = async(req, res, next) => {

  try {

    const nodesList = await k8sApi.listNode();


    // ** TODO (For each Node)**
    //CPU/Memory:
    //Name:
    //Role:
    //Message throughput:
    //number of deployment:
    //number of pods:lis

    res.locals.nodesList = {

      totalNumberOfNodes: nodesList.body.items.length,
      masterNode: {
      name: nodesList.body.items[0].metadata.name,
      creationTime: nodesList.body.items[0].metadata.creationTimestamp,
      UID: nodesList.body.items[0].metadata.uid,
      memoryCapacity: 'n/a',
      CPU: 'n/a',
      role: 'n/a'
      },
      workerNode1: {
        name: nodesList.body.items[1].metadata.name,
        creationTime: nodesList.body.items[1].metadata.creationTimestamp,
        UID: nodesList.body.items[1].metadata.uid
      },
      workerNode2: {
        name: nodesList.body.items[2].metadata.name,
        creationTime: nodesList.body.items[2].metadata.creationTimestamp,
        UID: nodesList.body.items[2].metadata.uid
      },
      workerNode3: {
        name: nodesList.body.items[3].metadata.name,
        creationTime: nodesList.body.items[3].metadata.creationTimestamp,
        UID: nodesList.body.items[3].metadata.uid
      }
    };

    return next();

  } catch (err) {
    console.error(err);
  };

};




module.exports = metricsController;