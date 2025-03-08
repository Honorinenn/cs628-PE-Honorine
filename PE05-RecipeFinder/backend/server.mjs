/*import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import recipes from "./routes/recipe.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipe", recipes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});*/

import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws"; // Import WebSocket library
import http from "http"; // Import HTTP module to attach WebSocket
import "./loadEnvironment.mjs";
import recipes from "./routes/recipe.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipe", recipes);

// Create an HTTP server and attach Express to it
const server = http.createServer(app);

// Create WebSocket server and attach it to HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("New WebSocket client connected");

  ws.send("Welcome to the WebSocket server!");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Server received: ${message}`);
  });

  ws.on("close", () => {
    console.log("WebSocket client disconnected");
  });
});

// Start the server with WebSocket support
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
