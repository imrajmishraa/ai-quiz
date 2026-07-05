import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// set RateLimit
app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Hello");
});

import healthzRouter from "./routes/healthz/healthz.route";
import { rateLimiter } from "./middleware/rateLimiter";

app.use("/api/v1/", healthzRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
