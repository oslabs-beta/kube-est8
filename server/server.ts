import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
import metricsRouter from './routes/metricsRouter'; // Assuming you'll also convert this to TS and use export default

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3333;

// HANDLE PARSING OF REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// SERVE STATIC FILES
app.use(express.static(path.resolve(__dirname, '../client/public')));

// METRICS ROUTER
app.use('/metrics', metricsRouter);

// CATCH-ALL ROUTE HANDLER
app.use('/*', (req: Request, res: Response) => {
  return res.status(404).send('Page not found - 404');
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3333, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
















