import * as express from "express";
import {healthCheckController} from "../../api/index-controller";

export const healthCheckRouter = (() => {
    let router = express.Router();

    router.get("/ping", healthCheckController.ping);

    return router;
})();
