/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12918

COMMENT:
처음 문자열의 길이가 4, 6인지 확인한다.
그 안에서 toString() 이후에도 길이가 4, 6인지 확인한다.
*/

function solution(s) {
  let answer = false;

  if (s.length === 4) {
    s = parseInt(s);
    if (s.toString().length === 4) {
      answer = true;
    }
  }
  if (s.length === 6) {
    s = parseInt(s);
    if (s.toString().length === 6) {
      answer = true;
    }
  }
  return answer;
}
