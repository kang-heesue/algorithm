/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/12939

COMMENT:
max, min 값을 구해 공백을 포함한 문자열로 리턴한다.
*/

function solution(s) {
  let answer = '';
  let arr = s.split(' ');
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  answer = min + ' ' + max;
  return answer;
}
