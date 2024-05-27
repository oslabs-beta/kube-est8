import express, { Request, Response } from 'express';
import metricsController from '../controllers/metricsController'; // Adjust this path if necessary
import throughputController from '../controllers/throughputController';

const router = express.Router();

router.get('/', metricsController.getNodeList, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.nodesList);
});

router.get('/throughput', throughputController.getThroughput, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.throughputData);
})

export default router;
