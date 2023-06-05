require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const routeManager = require("./routes");
const db = require("./config/db.config");

const { models } = db;

async function initial() {
  try {
    const count = await models.role.count();
    if (count <= 0) {
      await models.role.create({
        id: 1,
        name: "user",
      });
      await models.role.create({
        id: 2,
        name: "moderator",
      });

      await models.role.create({
        id: 3,
        name: "admin",
      });
      console.log("Role Default Data inserted Perfectly");
    }
  } catch (error) {
    // Handle connection or query error
    console.error(error);
  }
}

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await db.authenticate();
    db.sync({ alter: true })
      .then(() => {
        initial();
        console.log("Database connection OK!");
      })
      .catch((err) => console.log("Error: " + err));
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

assertDatabaseConnectionOk();

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

app.use("/api/v1", routeManager);

app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API using AWS Lambda Application",
  });
});

module.exports = app;
