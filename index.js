const fs = require("fs");
const path = require("path");

module.exports = {
  testImport: function() {
    return fs.readFileSync(path.join(__dirname, "TEST"), "utf8");
  }
};
