/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12944

COMMENT:
sort로 정렬해 준 후 반복문을 통해 구한다.
*/

function solution(arr) {
  let result = 0;
  let sum = 0;

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  result = sum / arr.length;

  return result;
}

// reduce를 이용한 코드
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
