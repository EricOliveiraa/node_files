"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const server = new server_1.Server();
server
    .boostrap()
    .then(() => {
    console.log("server is listenning", server.application.address());
})
    .catch((erro) => {
    console.log("error on server");
});
