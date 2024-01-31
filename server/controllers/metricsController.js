const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const metricsController = {};




metricsController.getNodeList = async(req, res, next) => {

  try {
    const nodesList = await k8sApi.listNode();
    res.locals.nodesList = nodesList;
    console.log(nodesList.body, 1);
    console.log(nodesList.body.items[0].status, 2);
    response = await k8sApi.listPodForAllNamespaces();
    console.log(response.body.items[0]);
    // console.log('API Server URL:', kc.getCurrentCluster().server, 3);
    return next();
  } catch (err) {
    console.error(err);
  }

}



module.exports = metricsController;