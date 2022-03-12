const express = require("express");
const morgan = require("morgan");
const path = require("path");

const boardRouter = require("./routers/boardRouter");
const globalRouter = require("./routers/globalRouter");

const app = express();

app.use(morgan("dev"));
app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "/static")));

app.use("/", globalRouter);
app.use("/b", boardRouter);

app.listen(4000, () => {
  console.log("4000 PORT. WEB SITE SERVER OPEN");
});
