import * as restify from "restify";

export abstract class Router {
  abstract applyRoutes(application: restify.Server) {}
}

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
