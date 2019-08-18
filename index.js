const express = require("express");
const app = express();
const parserTime = require("./app/parserTime.js");

const port = process.env.PORT || 3000;

app.use("/", express.static("./public"));

app.get("/:time", function (req, res) {
    const output = parserTime(req.params.time);
    res.send(JSON.stringify(output));
});

app.listen(port, function () {
    console.log('Your app is listening on port');
  });