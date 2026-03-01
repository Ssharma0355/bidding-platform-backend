import http from "http";
import app from "./app.js";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

export { io };

server.listen(process.env.PORT, () => {
  console.log("Server running");
});