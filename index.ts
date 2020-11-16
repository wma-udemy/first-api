import express = require("express");
import bodyParser = require("body-parser");
import {masterRouter} from "./src/core/route";

const app: express.Application = express();

app.use(bodyParser.urlencoded({extended: false, limit: "10mb"}));
app.use(bodyParser.json({limit: "10mb"}));

app.use('/api', masterRouter);

app.listen(3000, () => {
    console.log("Api start up on port 3000");
});
