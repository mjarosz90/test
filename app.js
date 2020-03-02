const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", express.static(__dirname + "/public/"));

app.get("/request", (req, res) => {
            console.log(req.headers);
            res.send(req.headers);
});

app.listen(3000);