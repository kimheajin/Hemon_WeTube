import "core-js";
import express from "express";
const app = express();

const POST = 4000;

const handleListen = () => console.log("Listening on : http://localhost:4000");

const handleHome = (req, res) => res.send("Hello from my Asome");

const handleProfile = (req, res) => res.send("yoou are on my profile");

const betweenHome = (req, res, next) => {
    console.log('Bewteen');
    next();
}
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile",handleProfile);

app.listen(POST, handleListen);