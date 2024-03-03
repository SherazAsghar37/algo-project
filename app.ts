import express from "express";
import dotenv from "dotenv";
dotenv.config();

const ip = process.env.IP || "127.0.0.1";
const port: number = parseInt(process.env.PORT || "8000", 10);
const app = express();
app.listen(port, ip, () => {
  console.log(`server is running on ${ip}:${port}`);
});
