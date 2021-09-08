/*
ABOUT

DATE: 2021-09-07
URL: https://programmers.co.kr/learn/courses/30/lessons/12982

COMMENT:
d를 오름차순으로 정렬한다.
d의 첫 인덱스부터 sum에 더하면서 budget과 비교해 지원 가능한지 확인한다.
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

// reduce를 이용한 코드
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
