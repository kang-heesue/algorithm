/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/76501

COMMENT:
signs의 각 요소가 true인지 false인지에 따라 구한다.
*/

function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      result = result - absolutes[i];
    } else {
      result = result + absolutes[i];
    }
  }
  return result;
}
