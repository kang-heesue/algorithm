/*
ABOUT

DATE: 2021-09-06

URL: https://programmers.co.kr/learn/courses/30/lessons/77484

COMMENT:
당첨 번호와 일치하는 번호는 통과이므로 filter를 이용해 구한다.
내 번호 중 0은 로또 번호와 일치할 수도 있고 아닐 수도 있으므로 따로 구한다.
순위는 1위부터 6위까지만 있다는 것에 유의한다.
최저 순위는 7에서 일치한 개수를 빼준다. 이때, 일치한 개수가 0개이면 7이 되므로 삼항연산자로 경우를 나눈다.
최고 순위는 최저 순위에서 0의 개수를 빼준다. 최저 순위와 0의 개수가 같으면 최고 순위가 0이 되므로 경우를 나눈다.
*/

function solution(lottos, win_nums) {
  let answer = [];
  const pass = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zero = lottos.filter((lotto) => lotto === 0).length;
  let min = 7 - pass >= 6 ? 6 : 7 - pass;
  let max = min - zero < 1 ? 1 : min - zero;

  answer = [max, min];
  return answer;
}
