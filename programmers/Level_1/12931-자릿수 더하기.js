/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12931

COMMENT:
문자열로 만들어 준 후 각 자리를 더한다.
*/

function solution(n) {
  let answer = 0;
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer += parseInt(n[i]);
  }
  return answer;
}
