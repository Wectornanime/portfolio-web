import { Request, Response, Router } from "express";

import { RouterType } from "./router";

export default function routerAdapter(router: RouterType): Router {
  const expressRouter = Router();

  Object.entries(router).map(([path, { method, response }]) => {
    expressRouter[method](path, (_: Request, res: Response) => {
      res.json({ data: response });
    });
  });

  return expressRouter;
}
