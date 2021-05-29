import express from "express";

const PORT = 5289;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>I am great</h1>");
};

app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server Listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//callback? -> 서버가 실행되었을때 시작하는 함수?
// npm run dev -> 노드맨 터미널 실행
// http://localhost:5289/ 서버 주소

//0529
// middleware 란, 중간 소프트웨어, 요청과 응답사이의 핸들러(콘트롤러)를 의미한다.
//그러므로 응답 값을 지니면 다음 next() 함수는 실행되지 않는다.응답으로 마침이 되기 때문이다.
//미들웨어를 위에 두면 모든 route 에 적용되는 것이다
//미들웨어는 그냥 컨트롤러와 같다. 다만 넥스트 아규먼트가 추가될 뿐이다.
//미들웨어는 전체 url에 사용할 수도 있고, 하나의 url에만 사용하게 만들 수 도 있다.
//미들웨어에 넥스트가 없다면 다음 컨트롤러는 실행되지 않는다.
//기본적으로 모든 것이 미들웨어다.
//next를 호출하며 미들웨어, send로 마무리를 지으면 컨트롤러(미들웨어가 아니다)
//next는 다 포함되지만 사용하지 않을뿐이다.
