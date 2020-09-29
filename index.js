const fs = require("fs");

module.exports = {
  testImport: function() {
    return fs.readFileSync("TEST", "utf8");
  }
};
