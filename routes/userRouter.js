import express from "express";
import { 
    changePassword, editProfile, userDetail, users 
} from "../controllers/userController.js";

import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;