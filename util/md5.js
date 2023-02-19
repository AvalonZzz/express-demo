const crypto = require("crypto");
console.log(crypto);
const d = crypto.createHash("md5").update("123").digest("hex");
console.log(d);
module.exports = (str) => crypto.createHash("md5").update(str).digest("hex");
