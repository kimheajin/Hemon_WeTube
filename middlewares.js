import routes from "./routes.js";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
};
// local변수에 접근하기 위해 localsmiddleware를 사용한다.