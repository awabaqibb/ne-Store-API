const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

const app = express();
app.use(express.json());
require("dotenv").config();
require("express-async-errors");

app.use("/", productRouter);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await connectDB(process.env.MONGO_URI);

    app.listen(3000, () => {
      console.log("Server is listening on port 3000...");
    });
  } catch (error) {
    console.error(error);
  }
};

start();
