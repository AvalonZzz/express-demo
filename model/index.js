// 1. 连接数据库
// 2. 创建Schema定义数据类型
// 3. 通过Schema创建model集合
// 4. 向model集合中填充数据
// 5. 保存
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/express-video");
}

main()
  .then((res) => {
    console.log("mongo连接成功");
  })
  .catch((err) => {
    console.log(err);
    console.log("mongo连接失败");
  });

module.exports = {
  User: mongoose.model("User", require("./userModel")),
};

// const user = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });
// const userModel = mongoose.model("User", user);
// const u = new userModel({ username: "lisi", age: 18 });
// u.save();
