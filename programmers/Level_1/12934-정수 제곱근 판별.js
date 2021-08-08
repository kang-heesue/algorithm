/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12934

COMMENT:
Math.sqrt를 이용해 제곱인지 구한다.
*/

function solution(n) {
  if (Math.sqrt(n) % 1 !== 0) {
    return -1;
  } else {
    return (Math.sqrt(n) + 1) ** 2;
  }
}
