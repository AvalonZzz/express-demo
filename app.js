const express = require("express");
const cors = require("cors"); // cors中间件
const morgan = require("morgan"); // 日志中间件
const router = require("./router");
const app = express();

const PORT = process.env_PORT || 3000;
console.log(PORT);

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log("server is running");
});
