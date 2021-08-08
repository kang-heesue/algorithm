/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12930

COMMENT:
공백을 기준으로 문자열을 쪼갠다.
이중반복문을 돌려 짝수번째는 대문자로 홀수번째는 소문자로 만든다.
*/

function solution(s) {
  let result = '';
  s = s.split(' ');

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (j % 2 === 0) {
        result += s[i][j].toUpperCase();
      } else {
        result += s[i][j].toLowerCase();
      }
    }
    result += ' ';
  }
  return result.slice(0, result.length - 1);
}
