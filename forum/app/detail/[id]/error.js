"use client";
//client 컴포넌트만 가능한
// error.js는 해당 폴더에 없으면 상위로 가면서 탐색함. 최상위에 두는 게 좋겠지?
// global-error.js는 최상위 에러 핸들링 가능. 에러는 동일 depth의 레이아웃 에러 감지못하기 때문

export default function Error(props) {
    //{error, reset} error 메시지 reset; 다시 페이지 로딩
    return <h4>에러났다. {props} </h4>;
}
