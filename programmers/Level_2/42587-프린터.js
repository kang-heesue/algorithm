/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/42587

COMMENT:
priorities 배열의 가장 앞에 있는 숫자에 초점을 둔다.
그 숫자를 제외하고 뒤에 있는 숫자들 중 우선순위가 더 큰 숫자가 있는지 비교한다.
우선순위에 따라 shift와 push로 뒤로 밀어주고 있으므로 이에 맞춰 location도 한 칸씩 앞으로 와야한다.
location이 0이 되는 순간이 처음 구하려고 했던 location 위치의 숫자가 출력되는 순서이다.
*/

function solution(priorities, location) {
  let answer = 0;

  while (priorities.length > 0) {
    let prev = priorities.shift();
    if (priorities.filter((cur) => cur > prev).length > 0) {
      priorities.push(prev);
    } else {
      answer++;
      if (location === 0) {
        return answer;
      }
    }
    location--;
    if (location === -1) {
      location = priorities.length - 1;
    }
  }
  return answer;
}
