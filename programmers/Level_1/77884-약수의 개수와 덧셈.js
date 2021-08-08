/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/12901

COMMENT:
약수를 구하는 함수를 만든다.
반복문을 돌려 약수의 개수가 짝수인지 홀수인지에 따라 구한다.
*/

function divisors(integer) {
  let arr = [];

  for (let i = 1; i <= integer; i++) {
    if (integer % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

function solution(left, right) {
  let answer = 0;

  for (let j = left; j <= right; j++) {
    if (divisors(j).length % 2 === 0) {
      answer += j;
    } else if (divisors(j).length % 2 !== 0) {
      answer -= j;
    }
  }
  return answer;
}

// 제곱근을 이용해 약수의 개수를 구별한 코드(함수를 새로 만들지 않음.)
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
