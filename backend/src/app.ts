import express from "express";
import bodyParser from "body-parser";
import { logger } from "./lib";
import cors from "cors";
import UserRouter from "./routes/users";

const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use("/users", UserRouter);

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

export default app;