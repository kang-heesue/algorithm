/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12947

COMMENT:
반복문으로 각 자릿수의 합을 구한다.
그 합으로 나누어 떨어지는지 확인한다.
*/

function solution(x) {
  let sum = 0;

  for (let i = 0; i < String(x).length; i++) {
    sum += parseInt(String(x)[i]);
  }

  if (x % sum === 0) {
    return true;
  }
  return false;
}
