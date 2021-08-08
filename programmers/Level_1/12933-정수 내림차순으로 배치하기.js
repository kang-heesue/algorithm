/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12933

COMMENT:
문자열로 만들고 배열에 넣은 후 sort로 정렬해준다.
이후 다시 join, parseInt를 이용해 정수로 만든다.
*/

function solution(n) {
  let arr = [];
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    arr.push(n[i]);
  }
  arr.sort((a, b) => b - a);
  arr = parseInt(arr.join().split(',').join(''));
  return arr;
}
