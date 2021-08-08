/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12906

COMMENT:
반복문을 돌려 중복을 제거한다.
순서는 유지해야 함을 주의한다.
*/

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// filter를 이용한 코드
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
