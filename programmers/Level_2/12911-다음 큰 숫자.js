/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/12911

COMMENT:
2진수로 변환하고 1의 갯수를 구하는 함수를 만든다. (binaryLength 함수)
n의 2진수일 때 1의 갯수와 n + 1부터 마찬가지로 구한 갯수를 비교해 같은 경우를 찾는다.
*/

function binaryLength(num) {
  let str = num.toString(2);
  let length = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      length++;
    }
  }
  return length;
}

function solution(n) {
  let length = binaryLength(n);

  for (let i = n + 1; i <= 1000000; i++) {
    let compareLength = binaryLength(i);
    if (length === compareLength) {
      return i;
    }
  }
  return i;
}
