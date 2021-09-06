/*
ABOUT

DATE: 2021-09-05

URL: https://programmers.co.kr/learn/courses/30/lessons/42883

COMMENT:
스택의 역할로 빈 배열을 만들고, 스택에 number의 값들을 하나씩 넣는다.
이때, 기존에 스택에 있는 값보다 크면 기존에 스택에 있는 값을 뺀다.
기존에 스택에 있는 값보다 작으면 푸시한다.
예외 케이스로 '999', 2와 같이 k개 만큼 모두 제거하지 못한 경우가 있고 뒤에서 k개만큼 제거한다.
*/

function solution(number, k) {
  let arr = [];

  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  return arr.join('');
}
