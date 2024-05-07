require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const populate = async () => {
  try {
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    populate();
  } catch (error) {
    console.log(error);
  }
};

start();
