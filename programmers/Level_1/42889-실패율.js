/*
ABOUT

DATE: 2021-09-07
URL: https://programmers.co.kr/learn/courses/30/lessons/42889

COMMENT:
스테이지에 도달했으나 클리어 못 한 플레이어 수를 failUser로 구한다.
실패율은 failUser를 스테이지 도달 플레이어 수로 나누어 주면 된다.
객체 형태로 저장하고 실패율에 따라 정렬해준다.
*/

function solution(N, stages) {
  let answer = [];
  let totalUser = stages.length;

  for (let i = 1; i <= N; i++) {
    let failUser = stages.filter((v) => v === i).length;
    let failRate = 0;

    if (failUser === 0) {
      failRate = 0;
    } else {
      failRate = failUser / totalUser;
    }
    totalUser = totalUser - failUser;
    answer.push({ idx: i, rate: failRate });
  }
  answer.sort((a, b) => {
    if (a.rate !== b.rate) {
      return b.rate - a.rate;
    } else {
      return a.rate - b.rate;
    }
  });
  return answer.map((v) => v.idx);
}
