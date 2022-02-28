import ErrorResponse from "../utils/errorResponse";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message - err.message;
  //Log to console
  console.log(err.stack);

  //Bad Object ID Mongodb
  if (err.name === "CastError") {
    const message = `Object not found with id of ${err.value}`;
    errpr = new ErrorResponse(message, 404);
  }

  //Duplicate key
  if (err.code === 11000) {
    const message = "Duplicate value entered";
    error = new ErrorResponse(message, 400);
  }

  //Validation error
  if (err.name === "Validation error") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};

export default errorHandler;
