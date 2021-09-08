/*
ABOUT

DATE: 2021-09-08
URL: https://programmers.co.kr/learn/courses/30/lessons/17681

COMMENT:
toString(2)를 이용해 2진수로 바꿔주는데, 항상 n의 길이여야 하므로 나머지를 0으로 채운다.
arr1과 arr2 모두 0인 곳은 공백으로, 나머지는 #으로 채워준다.
*/

function solution(n, arr1, arr2) {
  let result = [];

  arr1 = arr1.map((num) => '0'.repeat(n - num.toString(2).length) + num.toString(2));
  arr2 = arr2.map((num) => '0'.repeat(n - num.toString(2).length) + num.toString(2));

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '0' && arr2[i][j] === '0') {
        str += ' ';
      } else {
        str += '#';
      }
    }
    result.push(str);
  }
  return result;
}
