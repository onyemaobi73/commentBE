import express, { Application } from "express";
import { mainApp } from "./mainApp";

const port: number = 2030;
const app: Application = express();

mainApp(app)
app.use(express.json());
const server = app.listen(port, () => {
    console.log();
    console.log("server is now live");
});

process.on("uncaughtException", (error: Error) => {
  console.log("due to uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("due to unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
