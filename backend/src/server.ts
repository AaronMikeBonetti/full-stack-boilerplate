import express from "express";
import cors from "cors";

const app = express()

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))
app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/", express.static("../../frontend/src/index.html"))

const port = 5000

app.listen(port, () => {
    console.log(`Website is served on http://localhost:${port}`)
})

export default app