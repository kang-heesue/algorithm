/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/12899

COMMENT:
1, 2, 4가 반복되므로 3으로 나눴을 때 나머지에 따라 경우를 나눈다.
문자열 형태로 더해주면 계속 숫자를 붙여나갈 수 있다.
n을 3으로 나눠가며 n이 0보다 클 때까지 계속 반복한다.
*/

function solution(n) {
  let result = '';

  while (n > 0) {
    if (n % 3 === 1) {
      result = '1' + result;
      n = Math.floor(n / 3);
    } else if (n % 3 === 2) {
      result = '2' + result;
      n = Math.floor(n / 3);
    } else if (n % 3 === 0) {
      result = '4' + result;
      n = n / 3 - 1;
    }
  }
  return result;
}

// 인덱스를 이용한 코드
function solution(n) {
  let result = '';
  let src = [4, 1, 2];

  while (n) {
    result = src[n % 3] + result;
    n = Math.floor((n - 1) / 3);
  }
  return result;
}
