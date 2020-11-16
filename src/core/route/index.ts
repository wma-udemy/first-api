import * as express from "express";

import {healthCheckRouter} from "./health-check";
import {userRouter} from "./user";

export const masterRouter = (() => {
    let router = express.Router();

    router.use('/healthCheck', healthCheckRouter);
    router.use('/user', userRouter);

    return router;
})();
