/*
ABOUT

DATE: 2021-08-31

URL: https://programmers.co.kr/learn/courses/30/lessons/42578

COMMENT:
옷의 종류 = clothes[i]
(한 옷의 종류수 + 1(안 입는 경우의 수)) * (한 옷의 종류수 + 1(안 입는 경우의 수)) - 1(아무것도 안 입는 경우의 수)
옷의 종류를 key로, 그 옷의 개수를 value로 하는 obj를 생성한다.
그 옷을 입지 않은 경우를 계산하기 위해 value 기본값을 1로 지정한다.
모든 조합을 곱하고 아무것도 안 입는 경우의 수로 1을 빼 준다.
*/

function solution(clothes) {
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }
  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}
