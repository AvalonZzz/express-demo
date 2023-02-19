const { User } = require("../model/index");
exports.register = async (req, res) => {
  console.log(req.body);
  const { username, email, phone, password } = req.body;
  const u = new User({ username, email, phone, password });
  const dbRes = await u.save();
  const user = dbRes.toJSON();
  delete user.password;
  res.status(201).json({ user });
};

exports.list = async (req, res) => {
  console.log(req.method);
};
