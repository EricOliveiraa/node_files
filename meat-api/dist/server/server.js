"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const restify = require("restify");
const enviroments_1 = require("../common/enviroments");
class Server {
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: "meat-api",
                    version: "1.0.0",
                });
                this.application.use(restify.plugins.queryParser());
                // Routes
                // this.application.get("/home", (req, res, next) => {
                //   res.json({ message: "Hello" });
                //   return next();
                // });
                // this.application.get("/next", [
                //   (req, res, next) => {
                //     if (req.userAgent() && req.userAgent().includes("MSIE 7.0")) {
                //       res.status(400);
                //       res.json({ msg: "atualize seu brwoser" });
                //       return next(false);
                //     }
                //     return next();
                //   },
                //   (req, res, next) => {
                //     let error: any = new Error();
                //     error.statusCode = 400;
                //     error.message = "atualize seu browser";
                //     return next(error);
                //   },
                //   (req, res, next) => {
                //     res.json({ message: "Hello" });
                //     return next();
                //   },
                // ]);
                // this.application.get("/info", (req, res, next) => {
                //   res.json({
                //     browser: req.userAgent,
                //     method: req.method,
                //     url: req.href(),
                //     path: req.path(),
                //     params: req.params,
                //     query: req.query,
                //   });
                //   return next();
                // });
                this.application.listen(enviroments_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    boostrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;
