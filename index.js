const express = require("express");
const cors = require("cors");

//get the methods from controller file
const { getData, getUniqueRecordByName, postData, updateData, deleteData } = require("./controllers/CRUD");

//set the port
const PORT = 8000;

//initiate express qaoo
const app = express();

//use dotenv to load mongoDB url from environment file
const dotenv = require("dotenv");
dotenv.config();

//use mongoose to communicate with online MongoDB Atlas
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL, { //MONGODB_URL contains the URL to the MongoDB Atlas online database along with credentials
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//use necassary packages for url parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use router file for routing activities
const router = require("./router");
app.use(router);

router.get("/data", getData); //get all the record
router.get("/data/:name",getUniqueRecordByName); //get records based on name of movie
router.post("/data", postData); //insert new record in the database
router.put("/data/:ID", updateData); //update record based on unique ID
router.delete("/data/:ID",deleteData); //delete data based on unique ID



//starting server
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
