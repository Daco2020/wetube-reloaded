import express from "express";

const PORT = 5289;

const app = express();

const handleHome = () => console.log("go to home");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server Listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
// http://localhost:5289/ 서버 주소
