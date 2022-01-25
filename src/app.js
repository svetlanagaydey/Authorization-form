const { config } = require('dotenv')

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, "../client/build");

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.use("*", (req, res) => {
    res.send("this route is not exist")
});
const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Server up on port " + PORT));