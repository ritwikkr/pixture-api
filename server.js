import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRouter.js";
import movieRoutes from "./routes/movieRouter.js";
import connectDB from "./db/connectDB.js";

const app = express();

// Cors
app.use(cors());

// Configuring Dot Env
dotenv.config();

// Body Parser
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/movie", movieRoutes);

async function start() {
  try {
    const PORT = process.env.PORT || 5001;
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running at PORT:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
