import express from "express";
import "dotenv/config";
import cors from "cors"
import databaseConnect from "./database.js";

const app = express();

const PORT = process.env.PORT

app.use(cors())

//http://localhost:7777/
app.get(`/`, (req, res) => {
    res.json(`Hello World (from server)`);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    databaseConnect()
});
