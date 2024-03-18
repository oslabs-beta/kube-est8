import { RequestHandler, Request, Response, NextFunction } from 'express';

const k8s = require('@kubernetes/client-node');
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

interface ThroughputController {
  getThroughput: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}



const throughputController: ThroughputController = {


  getThroughput: async (req, res, next) => {

    try {

      const data = await k8sApi.listNode();
      console.log(data);





      return next();
    }
    catch(err) {
      console.error(err);
    }

  }

}




export default throughputController;