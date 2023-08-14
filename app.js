const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const Sequelize = require(`sequelize`);

const sequelize = require("./utils/database");
const routes = require("./routes/product");

const app = express();

// app.use(cors());
app.use(express.static(path.join(__dirname, ".", "public")));
app.use(bodyParser.json());

app.use("/api/products", routes);

sequelize
  .sync()
  .then((result) => {
    console.log("Database Connected...");
    app.listen(4000, () => {
      console.log(`Server start on port 4000`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
