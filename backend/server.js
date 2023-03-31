//const session = require("express-session");
//const SequelizeStore = require("connect-session-sequelize")(session.Store);
const express = require("express");
const cors = require("cors");
require('dotenv').config() 

const app = express();

//const sessionStore = new SequelizeStore(session.Store);


var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Taurai kuvarega's application." });
});

require("./app/routes/notesRoutes")(app);
require("./app/routes/userRoutes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
 
module.exports = app