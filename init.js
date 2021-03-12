import "./db.js"
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

// PORT번호를 dotenv로 숨겼다.
const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);