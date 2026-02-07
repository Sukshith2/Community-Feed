import express, {json} from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';

import postRouter from './routers/postRouter.js'
dotenv.config();
connectDB();
const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});