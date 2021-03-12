import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";
import videoRouter from "./routes/videoRouter.js";
import globalRouter from "./routes/globalRouter.js";
import routes from "./routes.js";
import { localsMiddleware } from "./middlewares.js";
const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
// 웹 사이트로전달하는 정보를 검사
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// application이 안전하게 도와줌
app.use(helmet());
// application을 이용한 모든 log를 출력
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' http://archive.org");
    return next();
});
app.use(localsMiddleware);


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;