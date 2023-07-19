import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  `Server running at PORT:${PORT}`;
});
