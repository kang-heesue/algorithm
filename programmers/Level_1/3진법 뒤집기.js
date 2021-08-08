/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/68935

COMMENT:
10진수 -> 다른 진수 : toString()
다른 진수 -> 10진수 : parseInt()
*/

function solution(n) {
  let reversed_N = n.toString(3).split('').reverse().join('');
  return parseInt(reversed_N, 3);
}
