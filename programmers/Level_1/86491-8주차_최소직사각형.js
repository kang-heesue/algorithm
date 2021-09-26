/*
ABOUT

DATE: 2021-09-28

URL: https://programmers.co.kr/learn/courses/30/lessons/84325

COMMENT:
2차원 배열을 분해해 각 배열을 오름차순으로 정렬한다.
작은 수를 가로, 큰 수를 세로로 정하고 각각 최댓값을 구해 곱한다.
*/

function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  sizes.map((size) => {
    size.sort((a, b) => a - b);
  });

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > maxW) {
      maxW = sizes[i][0];
    }
    if (sizes[i][1] > maxH) {
      maxH = sizes[i][1];
    }
  }
  return maxW * maxH;
}
