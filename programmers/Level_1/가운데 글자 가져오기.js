/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/12903

COMMENT:
짝수인지 홀수인지 나누어 구한다.
*/

function solution(s) {
  let result = '';
  let share = parseInt(s.length / 2);

  if (s.length % 2 !== 0) {
    result = s[share];
  } else {
    result = s[share - 1] + s[share];
  }
  return result;
}
