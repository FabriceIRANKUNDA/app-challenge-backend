import HttpStatus from "http-status";

import AppError from "../utils/appError";
import catchAsyncError from "../utils/catchAsyncError";

class DataChecker {
  static isValidAlbumId = (req, res, next) => {
    const { albumId } = req.params;
    if (!albumId) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: "fail",
        message: "Please provide album ID!",
      });
    } else if (!Number.isInteger(+albumId) || +albumId < 0 || +albumId > 100) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: "fail",
        message: "Please provide a valid album ID!",
      });
    } else {
      next();
    }
  };
}

export default DataChecker;
