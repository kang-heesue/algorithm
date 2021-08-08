/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12932

COMMENT:
문자열로 만든 후 배열에 각 자리 수를 넣어준다.
배열을 reverse로 뒤집어준다.
*/

function solution(n) {
  let arr = [];
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    arr.push(parseInt(n[i]));
  }
  arr.reverse();
  return arr;
}
