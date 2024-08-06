import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//middleware
const app = express();
dotenv.config();


//DB_CONNECTION
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DataBase connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(4000, () => {
  console.log("server is up");
});
