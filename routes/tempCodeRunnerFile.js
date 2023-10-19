const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router()

mongoose.connect("mongodb://localhost:27017/Marketplaces")
        .then(() => {
          const app = express()
          app.use("/api", routes) // new

          app.listen(3003, () => {
            console.log("Server has started!")
          })
        });

app.listen(3003, () => {
  console.log("success 3003!!!");
});