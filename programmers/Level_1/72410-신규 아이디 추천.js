/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/72410

COMMENT:
주어진 단계에 따라 정규식을 이용해 해결한다.
*/

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '');

  if (answer === '') {
    answer += 'a';
  }
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
  }
  answer = answer.replace(/\.$/g, '');

  while (answer.length <= 2) {
    answer += answer.slice(answer.length - 1, answer.length);
  }

  return answer;
}

// 간결한 코드
function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  const len = answer.length;

  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
