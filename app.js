import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";
import videoRouter from "./routes/videoRouter.js";
import globalRouter from "./routes/globalRouter.js";
import routes from "./router.js";
const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
// 웹 사이트로전달하는 정보를 검사
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// application이 안전하게 도와줌
app.use(helmet());
// application을 이용한 모든 것을 loggin하는 것
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;