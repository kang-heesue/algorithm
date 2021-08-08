/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12912

COMMENT:
사이값들을 더해야 하므로 크기 비교를 통해 구한다.
*/

function solution(a, b) {
  let result = 0;

  if (a <= b) {
    for (let i = a; i < b + 1; i++) {
      result += i;
    }
    return result;
  } else {
    for (let i = b; i < a + 1; i++) {
      result += i;
    }
    return result;
  }
}

// 가우스 정리 이용 (+ 크기 비교 없이 절대값 이용)
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
