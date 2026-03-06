/* eslint-disable no-console */
import express, { Request, Response } from "express";

import infoResponse from "./responses/info.json";

const app = express();
const PORT = 3000;

app.get("/api/info", (_: Request, res: Response) => {
  res.json({ data: infoResponse });
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
