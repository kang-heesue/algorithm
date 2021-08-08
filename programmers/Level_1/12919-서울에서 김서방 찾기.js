/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12919

COMMENT:
반복문을 이용해 위치를 찾는다.
*/

function solution(seoul) {
  let answer = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      answer = i;
    }
  }
  return `김서방은 ${answer}에 있다`;
}
