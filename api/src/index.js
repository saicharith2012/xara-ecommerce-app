import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import ngrok from "@ngrok/ngrok";

dotenv.config({
  path: "../env",
});

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, async () => {
      console.log(`Server is running on http://localhost:${port}`);

      const listener = await ngrok.forward({
        addr: port,
        authtoken: process.env.NGROK_AUTH_TOKEN,
      });

      console.log(`Ingress established at: ${listener.url()}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection FAILED!", error);
  });
