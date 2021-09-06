/*
ABOUT

DATE: 2021-09-06

URL: https://programmers.co.kr/learn/courses/30/lessons/42862

COMMENT:
n의 수에 따라 0으로 채운 배열을 만든다. (set)
도난당한 경우 1을 빼고, 여벌이 있는 경우 1을 더한다.
set에 -1이 있으면 여벌을 주어야 하므로 앞뒤를 확인한다.
전달이 끝난 후 0 이상인 경우에 수를 센다.
*/

function solution(n, lost, reserve) {
  let answer = 0;
  let set = new Array(n).fill(0); // 초기값 0

  for (let i = 0; i < lost.length; i++) {
    // 도난당한 경우 -1
    set[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    // 여벌 있는 경우 +1
    set[reserve[i] - 1]++;
  }

  for (let i = 0; i < set.length; i++) {
    if (set[i] === -1) {
      if (set[i - 1] === 1) {
        set[i]++;
        set[i - 1]--;
      } else if (set[i + 1] === 1) {
        set[i]++;
        set[i + 1]--;
      }
    }
    if (set[i] >= 0) {
      answer++;
    }
  }
  return answer;
}
