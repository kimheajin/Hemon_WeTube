import { videos } from "../db.js";

export const home = (req, res) => {
    res.render("home", { pageTitle:"Home" , videos});
}
export const search = (req, res) => {
    const {
        query : {term : searchingBy }
    } = req;
    // req.query == {query}와 같다.
    //위의 코드는 이것과 같다.-> const searchingBy = req.query.term; (ES6이전방식)
    res.render("search", { pageTitle:"Search" , searchingBy : searchingBy});   
}
export const upload = (req, res) => {
    res.render("upload", { pageTitle:"Upload" });
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

    