const sql = require("./db");

const Color = function(color) {
  this.color = color.color;
  this.hexcode = color.hexcode;
}

Color.addColor = (newColor, result) => {
  sql.query("INSERT INTO colors SET ?", newColor, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

Color.getAll = (result) => {
  sql.query("SELECT * FROM colors", (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

module.exports = Color;