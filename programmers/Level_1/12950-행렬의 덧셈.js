/*
ABOUT

DATE: 2021-07-29

URL: https://programmers.co.kr/learn/courses/30/lessons/12950

COMMENT:
2차원 배열이므로 이중 반복문을 통해 합을 구한다.
*/

function solution(arr1, arr2) {
  let result = [];
  let sum = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
    sum = [];
  }
  return result;
}

// map을 이용한 코드
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
