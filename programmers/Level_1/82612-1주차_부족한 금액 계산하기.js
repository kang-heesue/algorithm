/*
ABOUT

DATE: 2021-08-04

URL: https://programmers.co.kr/learn/courses/30/lessons/82612

COMMENT:
이용 횟수인 count에 따라 반복문을 돌려 총 필요한 놀이기구의 이용 금액을 구한다.
현재 가진 금액인 money와 비교한다.
*/

function solution(price, money, count) {
  let sum = 0;

  for (let i = 0; i <= count; i++) {
    sum += price * i;
  }

  if (money < sum) {
    return sum - money;
  }
  return 0;
}

// 삼항연산자를 이용한 코드
function solution(price, money, count) {
  const sum = (price * count * (count + 1)) / 2 - money;
  return sum > 0 ? sum : 0;
}
