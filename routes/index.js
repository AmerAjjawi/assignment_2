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

// const express = require("express");
// const mongoose = require("mongoose");
//  const routes = require("./routes"); 
// const cors = require("cors");

// const app = express();

// // Set up middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/Marketplaces")
//   .then(() => {
   
//     app.use("/api", routes);

   
//     app.listen(5000, () => {
//       console.log("Server has started!");
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });



// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");

// mongoose
//   .connect("mongodb://localhost:27017/MarketPlaces", { useNewUrlParser: true })
//   .then(() => {
//     const app = express();
//     app.use(express.json());
//     app.use("/api", routes);

//     app.listen(5000, () => {
//       console.log("Server has started!");
//     });
//   });










// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();

// mongoose
//   .connect("mongodb://localhost:27017/MarketPlaces", { useNewUrlParser: true })
//   .then(() => {
//     app.use(express.json());
//     app.use("/api", routes);

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   });


const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/MarketPlaces", { useNewUrlParser: true })
  .then(() => {
    app.use(express.json());
    app.use("/api", routes.router); 

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
