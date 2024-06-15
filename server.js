import express from "express";
import cors from "cors";
import workoutRouter from "./src/router/workoutRouter";

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());

app.use(workoutRouter);

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
