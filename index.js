const express = require("express");
let mongoose = require('mongoose');
const ip = require("ip");
const bodyParser = require("body-parser");
const repoRouter = require('./routes/repoRouter');
require("dotenv").config();
const port = process.env.PORT || 8000;
let MONGODB_URL = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`

mongoose.connect(process.env.DATABASE_URL || MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const app = express();
app.use(
    bodyParser.json({ limit: "50mb" }),
    bodyParser.urlencoded({ extended: true })
)
app.use('/api/repo', repoRouter);


app.listen(port, () => {
    console.log(`You can also use: `, `${"http://"}${ip.address()}:${port}`);
});