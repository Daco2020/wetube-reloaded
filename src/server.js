import express from "express";

const PORT = 5289;

const app = express();

const handleHome = (req, res) => {
  // 첫번째가 리퀘스트, 두번째가 리스폰 > 이 2개가 있어야 함.
  // return res.end();
  return res.send("<h1>I am great</h1>");
};

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to : ${req.url}`);
  next();
};
// middleware 란, 중간 소프트웨어, 요청과 응답사이의 핸들러(콘트롤러)를 의미한다.
//그러므로 응답 값을 지니면 다음 next() 함수는 실행되지 않는다.응답으로 마침이 되기 때문이다.

const handleLogin = (req, res) => {
  return res.send({ message: "Login here" });
};
app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server Listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
// http://localhost:5289/ 서버 주소
