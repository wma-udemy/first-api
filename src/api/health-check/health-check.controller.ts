import * as express from "express";

export const healthCheckController = (() => {
    return {
        ping
    };

    function ping(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({
            status: "OK",
            when: new Date()
        });
    }
})();
