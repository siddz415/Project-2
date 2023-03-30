// imports the path, express, express-session, and express-handlecars modules from Node.js
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const fileUpload = require('express-fileupload')

// creates new Express application instance
const app = express();

// Sets the PORT variable to the value of the environment variable or if it's undefined, it'll be set as 3001
const PORT = process.env.PORT || 3001;

// import sequelize connection
const sequelize = require("./config/connection");

// creates a new class that is used to store sessions in a Sequelize database
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  // empty object that will be used to configure the session ID cookie
  cookie: {},
  // determines whether the session should be saved again even if it hasn't changed
  resave: false,
  // determines whether a new but not modified session should be saved
  saveUninitialized: true,
  // new instance of the SequelizeStore class that is used to store the sessions
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// sets up session middleware
app.use(session(sess));
// import helper functions and create an instance of Handlebars engine with helpers
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
// sets view engine to Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// to parse incoming JSON and URL-encoded data
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles : true,
    tempFileDir : './tmp/'
  }));
// serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));
// controller middleware for routing
const routes = require("./controllers");
app.use(routes);
// Sync models with the database and start listening for requests on the specified port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});
