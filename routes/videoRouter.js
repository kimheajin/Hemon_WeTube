import express from "express";
import {
    deleteVideo, editVideo, upload, videoDetail
} from "../controllers/videoController.js";

import routes from "../router.js";

export const videoRouter = express.Router();
// const만 있는 것은 export 되지 않고 이것처럼 앞에 "export"를 입력해주어야 익스포트 된다.

// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;