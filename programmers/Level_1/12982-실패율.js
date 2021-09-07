/*
ABOUT

DATE: 2021-09-07
URL: https://programmers.co.kr/learn/courses/30/lessons/12982

COMMENT:
*/

function solution(d, budget) {
  let count = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    count++;
    sum += d[i];
    if (budget - sum < 0) {
      count--;
      break;
    }
  }
  return count;
}
