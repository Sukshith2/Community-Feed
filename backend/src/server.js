import express, {json} from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js"

import postRouter from './routers/postRouter.js'

config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use("api/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Community Feed API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
