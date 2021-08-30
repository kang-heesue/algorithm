/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/42746

COMMENT:
배열 안의 숫자들을 문자열 형태로 바꿔준다.
b + a의 값에서 a + b의 값을 빼서 음수면 순서가 그대로이고 양수면 두 수의 순서가 반대임을 알 수 있다.
answer의 가장 첫 번째가 0이면 뒤에 있는 숫자가 의미가 없으므로 0으로 리턴한다.
*/

function solution(numbers) {
  // [6, 10, 2]
  let string = numbers.map((num) => num + ''); // ["6", "10", "2"]
  let answer = string.sort((a, b) => (b + a) * 1 - (a + b) * 1).join('');
  return answer[0] === '0' ? '0' : answer; // "6210"
}

// Template literals를 이용한 코드 (map을 사용하지 않아 간결하다.)
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}
