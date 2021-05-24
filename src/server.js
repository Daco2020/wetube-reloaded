import express from "express";

const PORT = 7237;

const app = express();

const handleListening = () =>
  console.log("Server Listenting on port http://localhost:5289");

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
