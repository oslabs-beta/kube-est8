import { Request, Response, NextFunction } from 'express';


//import Kubernetes API client package
const k8s = require('@kubernetes/client-node');


interface MetricsController {
  getNodeList: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

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
// const metricsController = {};


const metricsController: MetricsController = {
  // Now you can safely assign getNodeList to it
  getNodeList: async (req, res, next) => {

    try {
      //.listNode is an API client method (native built in method)
      const data = await k8sApi.listNode();

      // *** TODO *** Conver the memory in to Gigabytes
      // const memoryInGb = (8029624 * 1024) / (1024 ** 3).toFixed(2)

      res.locals.nodesList = [

        {
          name: data.response.body.items[0].metadata.name,
          uid: data.response.body.items[0].metadata.uid,
          creationTimestamp: data.response.body.items[0].metadata.creationTimestamp,
          capacity: {
            cpuCapacity: data.response.body.items[0].status.capacity.cpu,
            memoryCapacity: data.response.body.items[0].status.capacity.memory,
            podsCapacity: data.response.body.items[0].status.capacity.pods
          },
          presureStatus: {
            lastHeartbeatTime: data.response.body.items[0].status.conditions[0].lastHeartbeatTime,
            memoryPressure: data.response.body.items[0].status.conditions[0].message,
            diskPressure: data.response.body.items[0].status.conditions[1].message,
            PIDPressure: data.response.body.items[0].status.conditions[2].message,
            status: data.response.body.items[0].status.conditions[3].message
          },
          totalImages: data.response.body.items[0].status.images.length
        },

        {
          name: data.response.body.items[1].metadata.name,
          uid: data.response.body.items[1].metadata.uid,
          creationTimestamp: data.response.body.items[1].metadata.creationTimestamp,
          capacity: {
            cpuCapacity: data.response.body.items[1].status.capacity.cpu,
            memoryCapacity: data.response.body.items[1].status.capacity.memory,
            podsCapacity: data.response.body.items[1].status.capacity.pods
          },
          presureStatus: {
            lastHeartbeatTime: data.response.body.items[1].status.conditions[0].lastHeartbeatTime,
            memoryPressure: data.response.body.items[1].status.conditions[0].message,
            diskPressure: data.response.body.items[1].status.conditions[1].message,
            PIDPressure: data.response.body.items[1].status.conditions[2].message,
            status: data.response.body.items[1].status.conditions[3].message
          },
          totalImages: data.response.body.items[1].status.images.length
        },

        {
          name: data.response.body.items[2].metadata.name,
          uid: data.response.body.items[2].metadata.uid,
          creationTimestamp: data.response.body.items[2].metadata.creationTimestamp,
          capacity: {
            cpuCapacity: data.response.body.items[2].status.capacity.cpu,
            memoryCapacity: data.response.body.items[2].status.capacity.memory,
            podsCapacity: data.response.body.items[2].status.capacity.pods
          },
          presureStatus: {
            lastHeartbeatTime: data.response.body.items[2].status.conditions[0].lastHeartbeatTime,
            memoryPressure: data.response.body.items[2].status.conditions[0].message,
            diskPressure: data.response.body.items[2].status.conditions[1].message,
            PIDPressure: data.response.body.items[2].status.conditions[2].message,
            status: data.response.body.items[2].status.conditions[3].message
          },
          totalImages: data.response.body.items[2].status.images.length
        },

        {
          name: data.response.body.items[3].metadata.name,
          uid: data.response.body.items[3].metadata.uid,
          creationTimestamp: data.response.body.items[3].metadata.creationTimestamp,
          capacity: {
            cpuCapacity: data.response.body.items[3].status.capacity.cpu,
            memoryCapacity: data.response.body.items[3].status.capacity.memory,
            podsCapacity: data.response.body.items[3].status.capacity.pods
          },
          presureStatus: {
            lastHeartbeatTime: data.response.body.items[3].status.conditions[0].lastHeartbeatTime,
            memoryPressure: data.response.body.items[3].status.conditions[0].message,
            diskPressure: data.response.body.items[3].status.conditions[1].message,
            PIDPressure: data.response.body.items[3].status.conditions[2].message,
            status: data.response.body.items[3].status.conditions[3].message
          },
          totalImages: data.response.body.items[3].status.images.length
        }

      ];

      return next();

    } catch (err) {
      console.error(err);
    };
  }
};

export default metricsController;