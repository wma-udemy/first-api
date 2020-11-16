import express = require("express");

const app: express.Application = express();

app.listen(3000, () => {
    console.log("Api start up on port 3000");
});
