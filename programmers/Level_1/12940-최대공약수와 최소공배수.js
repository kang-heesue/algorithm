/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12940

COMMENT:
최대공약수와 최소공배수를 구하는 함수를 따로 작성한다.
위 함수를 이용해 구해야 할 값을 빈 배열에 넣어준다.
*/

function GCD(a, b) {
  if (!b) {
    return a;
  }
  return GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

function solution(n, m) {
  let answer = [];
  let max = GCD(n, m);
  let min = LCM(n, m);

  answer.push(max, min);
  return answer;
}
