const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors"); // Import the cors middleware

//const PORT = process.env.PORT || 5000;

// Use the cors middleware

mongoose
  .connect("mongodb://127.0.0.1:27017/MarketPlaces", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })

  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// app.get("/getUsers", (req, res) => {
//   mongoose.find({}).then(function(users) {
//     res.json(users)
//   }). catch(function(err) {
//     console.log(err)
//   })
// })
