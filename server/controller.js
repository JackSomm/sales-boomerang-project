const Colors = require("./models/colors.model");

exports.getAll = (req, res) => {
  Colors.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Could not retrieve the colors from the database."
      });
    } else {
      res.send(data);
    }
  })
}