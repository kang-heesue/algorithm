/*
ABOUT

DATE: 2021-07-28

URL: https://programmers.co.kr/learn/courses/30/lessons/12935

COMMENT:
배열을 참조한 후에 참조한 배열을 통해 제거할 수를 구한다.
기존 배열에서 제거할 수를 제거해준다.
*/

function solution(arr) {
  let answer = [];
  let newArr = arr.slice();
  let eraseNum = parseInt(newArr.sort((a, b) => a - b).slice(0, 1));

  if (arr.length === 1) {
    answer.push(-1);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === eraseNum) {
        arr.splice(i, 1);
        answer = arr;
      }
    }
  }
  return answer;
}

// Math.min을 이용한 코드
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  if (arr.length < 1) {
    return [-1];
  }
  return arr;
}
