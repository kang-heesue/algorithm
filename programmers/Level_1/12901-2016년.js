/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/12901

COMMENT:
요일과 각 달의 일 수를 배열로 저장한다.
반복문을 돌려 주어진 요일까지 지난 달의 일 수를 더해준다.
추가로 그 달의 일 수를 더해준다.
리턴 값에 주의한다.
*/

function solution(a, b) {
  let result = '';
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let count = 0;
  for (let i = 0; i < a - 1; i++) {
    count += month[i];
  }
  count += b;
  result = day[(count - 1) % 7];
  return result;
}

// Date 객체를 사용한 코드
function solution(a, b) {
  let date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
