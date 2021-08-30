/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/42842

COMMENT:
노란색 격자의 가로 개수 = i
노란색 격자의 세로 개수 = j
테두리 격자 개수 = 노란색 격자 가로 * 2 + 노란색 격자 세로 * 2 + 4(꼭짓점 4개)
*/

function solution(brown, yellow) {
  let j = 0;

  for (let i = yellow; i >= 1; i--) {
    j = Math.floor(yellow / i);
    if (yellow % i === 0 && i * 2 + j * 2 + 4 === brown) {
      return [i + 2, j + 2];
    }
  }
}
