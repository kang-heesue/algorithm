/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/42748

COMMENT:
commands가 2차원 배열이므로 반복문을 돌린다.
slice, sort를 이용하는데, slice는 원본 배열에 영향을 주지 않음을 주의한다.
*/

function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    const newArr = array.slice(commands[i][0] - 1, commands[i][1]);
    newArr.sort((a, b) => {
      return a - b;
    });
    result.push(newArr[commands[i][2] - 1]);
  }
  return result;
}

// commands가 2차원 배열이므로
// map을 통해 [from, to, k]의 형태로 나타내면 좀 더 명시적이다.
