/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/12924

COMMENT:
이중 반복문에서 sum과 n을 비교해 같을 때까지 j를 더해준다.
*/

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      if (sum === n) {
        answer++;
      } else if (sum > n) {
        break;
      }
      sum += j;
    }
  }
  answer++;
  return answer;
}

// 홀수의 약수의 갯수를 이용한 코드 (주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수의 개수와 같다.)
function solution(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}
