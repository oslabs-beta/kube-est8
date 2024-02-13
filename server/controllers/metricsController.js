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

//adding method to metricsController
metricsController.getNodeList = async(req, res, next) => {

  try {
    //.listNode is an API client method (native built in method)
    const nodesList = await k8sApi.listNode();
    // console.log(nodesList.body.items[0]);

    const nodesArr = nodesList.body.items;

    let numOfNodes = nodesList.body.items.length;

    //for each node: 
    //CPU/Memory:
    //Name:
    //Role:
    //Message throughput:
    //number of deployment:
    //number of pods:

    //find method for accessing number of pods
    let numOfPods;
    //find method for accessing number of deployments
    let numOfDeployments;

    const listNode = await k8sApi.listNode(); 

    const test = await k8s.topNodes(k8sApi);
    console.log(test, 'test');

    const metricsClient = new k8s.Metrics(kc)
    const nodeMetrics = await metricsClient.getNodeMetrics();
    console.log(nodeMetrics, 'node metrics');

    res.locals.nodesList = {
      numOfNodes,
      numOfPods,
      numOfDeployments,
    };

    return next();
  } catch (err) {
    console.error(err);
  }

}




module.exports = metricsController;