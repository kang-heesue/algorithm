/*
ABOUT

DATE: 2021-09-02

URL: https://programmers.co.kr/learn/courses/30/lessons/12941

COMMENT:
최솟값은 가장 작은 수와 가장 큰 수를 곱해야 하기 때문에
A는 오름차순, B는 내림차순으로 정렬한다.
*/

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
