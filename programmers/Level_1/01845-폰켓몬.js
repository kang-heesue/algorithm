/*
ABOUT

DATE: 2021-08-12

URL: https://programmers.co.kr/learn/courses/30/lessons/1845

COMMENT:
nums 배열의 길이 / 2를 max로 선언한다.
빈 배열의 길이가 max보다 작을 때까지 중복되지 않는 값을 넣어 그 최대 길이를 구한다.
*/

function solution(nums) {
  let arr = [];
  let max = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (arr.length < max) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i]);
      }
    }
  }
  return arr.length;
}

// set 객체를 이용한 코드
function solution(nums) {
  let max = nums.length / 2;
  let arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
