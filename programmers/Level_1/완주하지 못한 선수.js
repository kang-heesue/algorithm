/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/42576

COMMENT:
participant와 completion 배열의 순서가 다르므로 sort를 이용해 정렬한다.
반복문을 통해 비교한다.
*/

function solution(participant, completion) {
  let result = '';
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      result = participant[i];
      return result;
    }
  }
}
