// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");

// mongoose.connect("mongodb://localhost:27017/Marketplaces")
//         .then(() => {
//           const app = express();
//           app.use(express.json());
//           app.use("/api", routes);

//           app.listen(5000, () => {
//             console.log("Server has started!")
//           });
//         });

// // app.listen(3003, () => {
// //   console.log("success 3003!!!");
// // });

// app.use(cors());
// app.use(express.json());


// /* GET home page. */
// // router.get("/", function (req, res, next) {
// //   res.render("index", { title: "Express" });
// // });

// // module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors"); // Import the 'cors' module

const app = express(); // Initialize the Express app

app.use(express.json());
app.use(cors()); // Use the 'cors' middleware

mongoose.connect("mongodb://localhost:27017/Marketplaces")
  .then(() => {
    // Set up routes
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });



