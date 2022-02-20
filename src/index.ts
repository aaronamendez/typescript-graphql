import express, { Application, Request, Response } from "express";
const server: Application = express();

server.get("/", (req: Request, res: Response) => {
  res.json("Hello, World... From Typescript 👍");
});

const PORT: number = Number(process.env.PORT) || 4000;

server.listen(PORT, () => {
  console.log(`<=== || Server is running on PORT: ${PORT} || ===>`);
});
