import { Server } from "./server/server";

const server = new Server();
server
  .boostrap()
  .then(() => {
    console.log("server is listenning", server.application.address());
  })
  .catch((erro) => {
    console.log("error on server");
  });
