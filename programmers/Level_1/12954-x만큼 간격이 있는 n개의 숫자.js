/*
ABOUT

DATE: 2021-07-29

URL: https://programmers.co.kr/learn/courses/30/lessons/12954

COMMENT:
반복문을 통해 x에 i를 곱해서 구한다.
*/

function solution(x, n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }
  return answer;
}
