const express = require('express');
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const config = require('./src/config/config.json');
const port = normalizePort(process.env.PORT || '3000');

require('./src/database/database')(config.database_test);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/src/html/index.html");
});

//Controllers
require("./src/controller/CepController")(app);
require("./src/controller/UserController")(app);

app.listen(port, () => {
  console.log("API rodando na porta " + port);
});

module.exports = app;
