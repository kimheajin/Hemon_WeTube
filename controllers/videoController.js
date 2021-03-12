import routes from "../routes.js";

export const home = (req, res) => {
    res.render("home", { pageTitle:"Home" , videos});
}
export const search = (req, res) => {
    const {
        query : {term : searchingBy }
    } = req;
    // req.query == {query}와 같다.
    //위의 코드는 이것과 같다.-> const searchingBy = req.query.term; (ES6이전방식)
    res.render("search", { pageTitle:"Search" , searchingBy, videos});
}
export const getUpload = (req, res) => res.render("upload", { pageTitle:"Upload" });
export const postUpload = (req, res) => {
    const{
        videofile,
        title,
        description
    } = req;
    // To Do : Upload and save video
    res.redirect(routes.videoDetail(323232));
}
export const videoDetail = (req, res) => {
    res.render("videoDetail", { pageTitle:"Video Detail" });
}
export const editVideo = (req, res) => {
    res.render("editVideo", { pageTitle:"Edit Video" });
}
export const deleteVideo = (req, res) => {
    res.render("deleteVideo", { pageTitle:"Delete Video" });
}

    