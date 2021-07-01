import AlbumService from "../services/AlbumService";
import Response from "../utils/Response";
import catchAsyncErr from "../utils/catchAsyncError";
import AppError from "../utils/appError";
import HttpStatus from "http-status";

class AlbumController {
  static getAlbumById = catchAsyncErr(async (req, res, next) => {
    const album = await AlbumService.getAlbum(req, res);

    if (!album) return next(new AppError(404, "No album found with that ID"));
    Response.successMessage(res, "Album is ready!", album, HttpStatus.OK);
  });
}

export default AlbumController;
