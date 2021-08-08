/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12922

COMMENT:
짝수번째 자리인지 홀수번째 자리인지로 나누어 구한다.
*/

function solution(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result += '수';
    } else {
      result += '박';
    }
  }
  return result;
}
