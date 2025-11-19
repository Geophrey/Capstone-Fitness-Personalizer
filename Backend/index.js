import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT

//http://localhost:7777/
app.get(`/`, (req, res) => {
    res.json(`Hello World (from server)`);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
