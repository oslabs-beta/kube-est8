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

metricsController.getNodeList = async(req, res, next) => {

  try {
    //.listNode is an API client method (native built in method)
    const whateverName = await k8sApi.listNode();; 

    // *** TODO *** Conver the memory in to Gigabytes
    // const memoryInGb = (8029624 * 1024) / (1024 ** 3).toFixed(2)

    res.locals.nodesList = [

      {
        name: whateverName.response.body.items[0].metadata.name,
        uid: whateverName.response.body.items[0].metadata.uid,
        creationTimestamp: whateverName.response.body.items[0].metadata.creationTimestamp,
        capacity: {
          cpuCapacity: whateverName.response.body.items[0].status.capacity.cpu,
          memoryCapacity: whateverName.response.body.items[0].status.capacity.memory,
          podsCapacity: whateverName.response.body.items[0].status.capacity.pods
        },
        presureStatus: {
          lastHeartbeatTime: whateverName.response.body.items[0].status.conditions[0].lastHeartbeatTime,
          memoryPressure: whateverName.response.body.items[0].status.conditions[0].message,
          diskPressure: whateverName.response.body.items[0].status.conditions[1].message,
          PIDPressure: whateverName.response.body.items[0].status.conditions[2].message,
          status: whateverName.response.body.items[0].status.conditions[3].message
        },
        totalImages: whateverName.response.body.items[0].status.images.length
      },

      {
        name: whateverName.response.body.items[1].metadata.name,
        uid: whateverName.response.body.items[1].metadata.uid,
        creationTimestamp: whateverName.response.body.items[1].metadata.creationTimestamp,
        capacity: {
          cpuCapacity: whateverName.response.body.items[1].status.capacity.cpu,
          memoryCapacity: whateverName.response.body.items[1].status.capacity.memory,
          podsCapacity: whateverName.response.body.items[1].status.capacity.pods
        },
        presureStatus: {
          lastHeartbeatTime: whateverName.response.body.items[1].status.conditions[0].lastHeartbeatTime,
          memoryPressure: whateverName.response.body.items[1].status.conditions[0].message,
          diskPressure: whateverName.response.body.items[1].status.conditions[1].message,
          PIDPressure: whateverName.response.body.items[1].status.conditions[2].message,
          status: whateverName.response.body.items[1].status.conditions[3].message
        },
        totalImages: whateverName.response.body.items[1].status.images.length
      },

      {
        name: whateverName.response.body.items[2].metadata.name,
        uid: whateverName.response.body.items[2].metadata.uid,
        creationTimestamp: whateverName.response.body.items[2].metadata.creationTimestamp,
        capacity: {
          cpuCapacity: whateverName.response.body.items[2].status.capacity.cpu,
          memoryCapacity: whateverName.response.body.items[2].status.capacity.memory,
          podsCapacity: whateverName.response.body.items[2].status.capacity.pods
        },
        presureStatus: {
          lastHeartbeatTime: whateverName.response.body.items[2].status.conditions[0].lastHeartbeatTime,
          memoryPressure: whateverName.response.body.items[2].status.conditions[0].message,
          diskPressure: whateverName.response.body.items[2].status.conditions[1].message,
          PIDPressure: whateverName.response.body.items[2].status.conditions[2].message,
          status: whateverName.response.body.items[2].status.conditions[3].message
        },
        totalImages: whateverName.response.body.items[2].status.images.length
      },

      {
        name: whateverName.response.body.items[3].metadata.name,
        uid: whateverName.response.body.items[3].metadata.uid,
        creationTimestamp: whateverName.response.body.items[3].metadata.creationTimestamp,
        capacity: {
          cpuCapacity: whateverName.response.body.items[3].status.capacity.cpu,
          memoryCapacity: whateverName.response.body.items[3].status.capacity.memory,
          podsCapacity: whateverName.response.body.items[3].status.capacity.pods
        },
        presureStatus: {
          lastHeartbeatTime: whateverName.response.body.items[3].status.conditions[0].lastHeartbeatTime,
          memoryPressure: whateverName.response.body.items[3].status.conditions[0].message,
          diskPressure: whateverName.response.body.items[3].status.conditions[1].message,
          PIDPressure: whateverName.response.body.items[3].status.conditions[2].message,
          status: whateverName.response.body.items[3].status.conditions[3].message
        },
        totalImages: whateverName.response.body.items[3].status.images.length
      }

    ];

    return next();

  } catch (err) {
    console.error(err);
  };

};




module.exports = metricsController;