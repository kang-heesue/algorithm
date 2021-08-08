/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12926

COMMENT:
각 알파벳의 위치를 알아야 해서 fromCharCode를 이용한다.
대문자, 소문자 위치를 생각해 숫자들을 변형해준다.
*/

function solution(s, n) {
  return s
    .split('')
    .map((el) => {
      if (el == ' ') {
        return el;
      }
      const tmp = el.charCodeAt();
      return el.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join('');
}
