const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const metricsController = {};




metricsController.getNodeList = async(req, res, next) => {

  try {
    const nodesList = await k8sApi.listNode();
    // console.log(nodesList.body.items[0]);

    const nodesArr = nodesList.body.items;

    let numOfNodes = nodesList.body.items.length;

    let numOfPods;
    let numOfDeployments;
    let numOfNamespaces;


    const listNode = await k8sApi.listNode();


    // const axios = require('axios');

    // const metricsServerApiUrl = 'http://127.0.0.1:56110/apis/metrics.k8s.io/v1beta1/nodes';

    // const metricsRes = await axios.get(metricsServerApiUrl)
    // //https://127.0.0.1:56110

    // console.log(metricsRes);


    const test = await k8s.topNodes(k8sApi);
    console.log(test, 'test');

    const metricsClient = new k8s.Metrics(kc)
    const nodeMetrics = await metricsClient.getNodeMetrics();
    console.log(nodeMetrics, 'node metrics');

    res.locals.nodesList = {
      numOfNodes,
      numOfPods,
      numOfDeployments,
      numOfNamespaces
    };

    return next();
  } catch (err) {
    console.error(err);
  }

}



module.exports = metricsController;