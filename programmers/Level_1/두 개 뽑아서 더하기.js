/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/68644

COMMENT:
반복문으로 두 개의 수를 더하고 배열에 넣는다.
sort로 정렬 후 중복을 filter로 제거한다.
*/

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer.sort((a, b) => a - b);
  return answer.filter((item, index) => answer.indexOf(item) === index);
}
