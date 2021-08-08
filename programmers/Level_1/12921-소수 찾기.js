/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12921

COMMENT:
반복문을 통해 소수를 확인한다.
이때, i^2을 이용해 반복 횟수를 줄일 수 있다.
*/

function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 1; i * i < n; i++) {
    if (arr[i]) {
      let num = arr[i];
      for (let j = num * num; j <= n; j += num) {
        arr[j - 1] = 0;
      }
    }
  }
  let answer = arr.filter((number) => number);
  answer.shift();
  return answer.length;
}
