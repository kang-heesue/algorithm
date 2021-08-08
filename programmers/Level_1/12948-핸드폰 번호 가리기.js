/*
ABOUT

DATE: 2021-07-29

URL: https://programmers.co.kr/learn/courses/30/lessons/12948

COMMENT:
'*'을 repeat을 통해 반복적으로 찍어준다.
*/

function solution(phone_number) {
  let star = '*'.repeat(phone_number.length - 4);
  let changeLength = phone_number.slice(0, phone_number.length - 4);

  return phone_number.replace(changeLength, star);
}
