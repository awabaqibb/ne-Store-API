const errorHandlerMiddleware = async (err, req, res, next) => {
  //  throw new Error("testing async errors");
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
