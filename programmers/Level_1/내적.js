/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/70128

COMMENT:
`내적 : 두 벡터를 표준기저벡터로 나타내었을 때 각 성분끼리의 곱의 합`
내적의 의미만 안다면 반복문/reduce를 이용해 간단히 해결할 수 있다.
*/

function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// reduce를 이용한 코드
function solution(a, b) {
  let answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);

  return answer;
}
