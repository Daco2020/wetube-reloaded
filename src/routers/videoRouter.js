import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
  watch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;

// : > 파라미터 > url 안에 변수를 사용할 수 있게 해준다
// * > 모든 걸 대체할 수 있음을 뜻함  > 'ab*cd'  > 모두가능
// + > 앞글자가 계속 반복되도 된다는 것을 뜻함 > 'ab+cd'   > 앞글자 반복
// ? > 앞글자가 있어도 되고 없어도 된다는 것을 뜻함 > 'ab?cd' > 앞글자 선택사항
// (ab)? > 묶인 그룹이 있어도 되고 없어도 됨 > 'ab(cd)?e > 그룹 선택사항
// w > 아무 문자라는 뜻 > (nico\w+)
// d > 숫자 라는 뜻 (digit) = 숫자 > (\\d+)
