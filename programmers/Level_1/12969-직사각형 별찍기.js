/*
ABOUT

DATE: 2021-07-29

URL: https://programmers.co.kr/learn/courses/30/lessons/12969

COMMENT:
이 문제는 자바스크립트 표준 입출력 방식이다.
이중 반복문을 통해 '*'을 반복해 주고 반복문 1개를 탈출했을 때 줄바꿈을 해 준다.
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let result = '';

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
});
