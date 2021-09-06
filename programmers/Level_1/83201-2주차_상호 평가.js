/*
ABOUT

DATE: 2021-08-25

URL: https://programmers.co.kr/learn/courses/30/lessons/83201

COMMENT:
등급을 매겨줄 함수를 따로 만든다.
scores의 원소값은 0 이상 100 이하이므로 최소, 최대를 선언한다.
최소, 최대가 같은 값인 경우와 1개인 경우를 위해 flag를 선언한다.
*/

function rank(avg) {
  if (avg >= 90) return 'A';
  else if (avg >= 80) return 'B';
  else if (avg >= 70) return 'C';
  else if (avg >= 50) return 'D';
  else return 'F';
}

function solution(scores) {
  let result = '';

  for (let i = 0; i < scores.length; i++) {
    let sum = 0;
    let count = scores.length;
    let flag = true;

    let min = 101;
    let max = -1;

    for (let j = 0; j < scores[i].length; j++) {
      let score = scores[j][i];
      if (i !== j && scores[i][i] === score) {
        flag = false;
      }
      min = Math.min(min, score);
      max = Math.max(max, score);
      sum += score;
    }
    if (flag && (min === scores[i][i] || max === scores[i][i])) {
      count--;
      sum -= scores[i][i];
    }
    result += rank(sum / count);
  }
  return result;
}
