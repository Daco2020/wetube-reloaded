import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4444;

const app = express();
const logger = morgan("dev");

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server Listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
// http://localhost:4444/ 서버 주소
