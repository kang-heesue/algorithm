/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/12977

COMMENT:
소수 확인 함수를 따로 만든다.
반복문을 돌려 서로 다른 3개의 수의 합을 배열 형태로 만든다.
배열의 각 요소들이 소수인지 함수로 체크한다.
*/

function decimal(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function solution(nums) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (let z = 0; z < arr.length; z++) {
    if (decimal(arr[z])) {
      count++;
    }
  }
  return count;
}

// 마지막에 반복문을 새로 쓰지 말고 3중 반복문 안에서 같이 해결할 수도 있다. (배열 없애고)
