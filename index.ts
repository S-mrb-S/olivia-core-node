import express, { Express, Request, Response } from "express";
import { publicPort } from "./src/config";

const port = publicPort;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send('<center><h5>some html</h5></center>');
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
