import * as express from "express";
import {userController} from "../../api/index-controller";

export const userRouter = (() => {
    let router = express.Router();

    router.post("/signIn", userController.signIn);

    return router;
})();
