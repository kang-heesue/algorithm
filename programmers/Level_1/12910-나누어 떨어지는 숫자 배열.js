/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12910

COMMENT:
반복문을 돌려 나머지가 0인 값을 구해서 배열에 담는다.
*/

function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);

  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}

// filter 및 삼항연산자를 이용한 간결한 코드
function solution(arr, divisor) {
  let answer = arr.filter((e) => e % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
