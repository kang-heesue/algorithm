/*
ABOUT

DATE: 2021-08-30

URL: https://programmers.co.kr/learn/courses/30/lessons/42586

COMMENT:
작업 진도가 100이 되면 끝나므로 그때까지 반복문으로 speeds[i]를 더해준다.
가장 앞의 작업이 100이 넘어가면 shift()로 제거해주고 count를 센다.
progresses에 남은 요소가 없을 때까지 반복해서 count를 구하고 배열 형태로 리턴해준다.
*/

function solution(progresses, speeds) {
  let answer = [];

  while (speeds.length > 0) {
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}

// 다른 사람의 코드 (map을 이용해 가독성이 높다.)
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}
