import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

const healthz: express.Express = app.get(
  "/healthz",
  (req: Request, res: Response) => {
    res.send({
      message: "HealthCheck Successful!",
    });
  },
);

export { healthz };
