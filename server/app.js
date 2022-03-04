const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

require("./routes")(app);

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});