/*
ABOUT

DATE: 2021-10-29

URL: https://programmers.co.kr/learn/courses/30/lessons/87389

COMMENT:
반복문을 돌려 나머지가 1인지 확인한다.
*/

function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
