/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/42840

COMMENT:
3명의 수포자들의 찍는 방식은 순서가 있으므로 배열에 담는다.
반복문으로 비교한다.
*/

function solution(answers) {
  let count = [0, 0, 0];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (a1[i % a1.length] === answers[i]) {
      count[0]++;
    }
    if (a2[i % a2.length] === answers[i]) {
      count[1]++;
    }
    if (a3[i % a3.length] === answers[i]) {
      count[2]++;
    }
  }
  let max = Math.max(...count);
  let result = [];

  for (let j = 0; j < count.length; j++) {
    if (count[j] === max) {
      result.push(j + 1);
    }
  }
  return result;
}
