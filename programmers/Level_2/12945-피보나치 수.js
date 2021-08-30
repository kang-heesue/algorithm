/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/12899

COMMENT:
(A + B) % C = ((A % C) + (B % C)) % C
등호를 기준으로 왼쪽 식으로 사용하면 해결되지 않는다. 오른쪽 식을 사용해야 한다.
A + B를 1234567로 나누는 것인데, 이미 두 수는 int로 표현할 수 있는 범위를 넘어가
1234567로 나누기 전에도 정확한 값이 아니므로 나눈 값 또한 잘못된 값일 수밖에 없다.
*/

function solution(n) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      arr.push(i);
    } else {
      arr.push((arr[i - 2] % 1234567) + (arr[i - 1] % 1234567));
    }
  }
  return arr[n] % 1234567;
}
