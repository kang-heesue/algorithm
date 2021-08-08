/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12928

COMMENT:
약수들을 구해 빈 배열에 넣어주고 다시 반복문을 돌려 합을 구한다.
*/

function solution(n) {
  let arr = [];
  let result = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    result += arr[j];
  }
  return result;
}
