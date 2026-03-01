import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { protect } from "./middleware/auth.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

//  Protected Route
app.get("/api/test", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

export default app;