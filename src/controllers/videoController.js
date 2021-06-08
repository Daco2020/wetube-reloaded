export const trending = (req, res) => res.send("Home Page Videos");
export const watch = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");

// 개별 변수를 익스포트 할 때는 임포트 할 때도 개별 이름을 정확히 기재해주어야 함.
// 디폴트 익스포트는 해당 파일에 하나밖에 없기 때문에 이름 변경 가능