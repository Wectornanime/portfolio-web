import infoResponse from "./responses/info.json";

export type RouterType = {
  [endpoint: string]: {
    method: "get" | "post" | "put" | "patch" | "delete";
    response: Object;
  };
};

export const router: RouterType = {
  "/wectornanime": {
    method: "get",
    response: infoResponse,
  },
};
