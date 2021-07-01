import { Router } from "express";
import DataChecker from "../middlewares/verifyAlbumId";
import AlbumController from "../controller/getAlbumController";

const router = Router();

router
  .route("/get-album/:albumId")
  .get(DataChecker.isValidAlbumId, AlbumController.getAlbumById);

export default router;
