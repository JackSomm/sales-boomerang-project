const ctrl = require("../controller");

module.exports = (app) => {
  app.get("/home", ctrl.getAll);
}