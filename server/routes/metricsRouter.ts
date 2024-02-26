import express, { Request, Response } from 'express';
import metricsController from '../controllers/metricsController'; // Adjust this path if necessary

const router = express.Router();

router.get('/', metricsController.getNodeList, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.nodesList);
});

export default router;
