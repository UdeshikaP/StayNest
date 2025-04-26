const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose = require("mongoose");


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'StayNest_db',

})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Start the server
const port = process.env.PORT || 5003;
app.listen(port, () => console.log(`Node server started at port ${port}`));
 



// Import Routes
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoute");


app.use("/user",userRoutes);
app.use("/contact",contactRoutes);








