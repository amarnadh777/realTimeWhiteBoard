import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  transports: ["websocket"], // improves connection stability
});

export default socket;