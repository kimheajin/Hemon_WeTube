import express from "express";
import routes from "../routes.js";
import {
    deleteVideo, editVideo, getUpload, postUpload, videoDetail
} from "../controllers/videoController.js";


export const videoRouter = express.Router();
// const만 있는 것은 export 되지 않고 이것처럼 앞에 "export"를 입력해주어야 익스포트 된다.

// videoRouter.get(routes.videos, home);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;