import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRouter.js";

dotenv.config();
const app = express();

app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}`);
});
