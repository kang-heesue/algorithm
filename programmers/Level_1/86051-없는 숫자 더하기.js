/*
ABOUT

DATE: 2021-10-28

URL: https://programmers.co.kr/learn/courses/30/lessons/86051

COMMENT:
0부터 9까지 반복문을 돌려 numbers와 일치하지 않는 것은 더해준다.
*/

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}
