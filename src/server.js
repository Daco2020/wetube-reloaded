import express from "express";

const PORT = 5289;

const app = express();

const handleHome = (req, res) => {
  // 첫번째가 리퀘스트, 두번째가 리스폰 > 이 2개가 있어야 함.
  // return res.end();
  return res.send("<h1>I am great</h1>");
};

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

// middleware 란, 중간 소프트웨어, 요청과 응답사이의 핸들러(콘트롤러)를 의미한다.
//그러므로 응답 값을 지니면 다음 next() 함수는 실행되지 않는다.응답으로 마침이 되기 때문이다.

const handleLogin = (req, res) => {
  return res.send({ message: "Login here" });
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge. ");
};

app.use(logger);
app.use(privateMiddleware);
//미들웨어를 위에 두면 모든 route 에 적용되는 것이다
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server Listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
// http://localhost:5289/ 서버 주소

//미들웨어는 그냥 컨트롤러와 같다. 다만 넥스트 아규먼트가 추가될 뿐이다.
//미들웨어는 전체 url에 사용할 수도 있고, 하나의 url에만 사용하게 만들 수 도 있다.
//미들웨어에 넥스트가 없다면 다음 컨트롤러는 실행되지 않는다.
//기본적으로 모든 것이 미들웨어다.
