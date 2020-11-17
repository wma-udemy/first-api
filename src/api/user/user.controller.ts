import * as express from "express";

export const userController = (() => {
    return {
        signIn
    };

    function signIn(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({
            status: "Usuário Logado",
            when: new Date(),
            body: req.body
        });
    }
})();
