import axios from "axios";
import { response } from "express";

class AlbumService {
  /**
   * Get request to fetch Album
   * @static
   * @param {object} req  request object
   * @memberof AlbumService
   * @returns {object} data
   */

  static async getAlbum(req, res) {
    const { albumId } = req.params;
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;

    const config = {
      method: "get",
      url: url,
      headers: {},
    };

    const response = await axios(config);

    if (!response.data) return null;

    const album = response.data.map((data) => ({
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnailUrl,
    }));

    return album;
  }
}

export default AlbumService;
