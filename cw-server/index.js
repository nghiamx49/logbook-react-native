const express = require("express");
const cors = require("cors");
const errorhandler = require("errorhandler");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const detailModel = require("./Detail.Model");

const Detail = detailModel;

mongoose
  .connect(`mongodb://localhost:27017/cw-db`)
  .then(() => {
    console.log("Connect to databse success");
  })
  .catch((err) => {
    console.log("error:" + err);
    process.exit();
  });


app.use(
  cors({
    origin: "*",
  })
);
app.use(errorhandler());
app.use(express.json());
app.use(morgan("dev"));

app.post("/create", async (req, res) => {
  const {
    propertyType,
    bedRoom,
    addingDate,
    monthlyRentPrice,
    furnitureType,
    notes,
    reporterName,
  } = req.body;
  console.log(req.body);
  const newDetail = new Detail({
    propertyType,
    bedRoom,
    addingDate,
    monthlyRentPrice,
    furnitureType,
    notes,
    reporterName,
  });
  await newDetail.save();
  res.json({ message: "Create success", status: 201 });
});

app.get("/", async (req, res) => {
  let allAdd = await Detail.find();
  res.json({ data: allAdd });
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
