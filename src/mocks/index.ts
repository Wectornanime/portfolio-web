/* eslint-disable no-console */
import express from "express";
import cors from "cors";

import routerAdapter from "./router.adapter";
import { router } from "./router";

const app = express();
const PORT = 3000;
const routes = routerAdapter(router);
const defaultPath = "/api/public";

app.use(cors());
app.use(defaultPath, routes);

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
