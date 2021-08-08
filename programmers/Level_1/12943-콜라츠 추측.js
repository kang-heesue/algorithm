/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12943

COMMENT:
주어진 규칙을 순서대로 반복한다.
*/

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }

  if (count > 500) {
    return -1;
  }

  return count;
}
