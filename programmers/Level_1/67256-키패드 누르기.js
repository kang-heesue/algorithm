/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/67256

COMMENT:
거리를 구하는 함수를 만든다.
각 키패드를 배열 형태로 바꾸고 거리 함수를 이용해 왼손인지 오른손인지 구한다.
*/

function getDistance(start, target) {
  let sum = 0;
  sum += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  sum += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
  return sum;
}

function solution(numbers, hand) {
  let answer = '';
  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let leftHand = keys['*'];
  let rightHand = keys['#'];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      leftHand = keys[numbers[i]];
      answer += 'L';
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      rightHand = keys[numbers[i]];
      answer += 'R';
    } else {
      const leftDistance = getDistance(leftHand, keys[numbers[i]]);
      const rightDistance = getDistance(rightHand, keys[numbers[i]]);

      if (leftDistance === rightDistance) {
        if (hand === 'left') {
          leftHand = keys[numbers[i]];
          answer += 'L';
        } else {
          rightHand = keys[numbers[i]];
          answer += 'R';
        }
      } else if (leftDistance < rightDistance) {
        leftHand = keys[numbers[i]];
        answer += 'L';
      } else {
        rightHand = keys[numbers[i]];
        answer += 'R';
      }
    }
  }
  return answer;
}
