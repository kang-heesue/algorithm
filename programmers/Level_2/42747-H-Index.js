/*
ABOUT

DATE: 2021-08-31

URL: https://programmers.co.kr/learn/courses/30/lessons/42747

COMMENT:
H-Index에 대한 위키백과 링크 : https://en.wikipedia.org/wiki/H-index
인용 횟수를 내림차순으로 정렬한다.
h회 이상 인용된 논문이 h편보다 크거나 같을 때를 구한다.
*/

function solution(citations) {
  let i = 0;
  citations = citations.sort((a, b) => b - a);

  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
