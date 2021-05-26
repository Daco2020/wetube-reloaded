import express from "express";

const PORT = 5289;

const app = express();

const handleHome = (req, res) => {
  // 첫번째가 리퀘스트, 두번째가 리스폰 > 이 2개가 있어야 함.
  // return res.end();
  return res.send("you are great");
};

const handleLogin = (req, res) => {
  return res.send("Login here");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server Listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
// http://localhost:5289/ 서버 주소
