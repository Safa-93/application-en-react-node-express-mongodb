const account = require("./account/lib");
module.exports = function (app) {
  app.post("/login", account.login);
  app.post("/signup", account.signup);
};
