/*
ABOUT

DATE: 2021-09-03

URL: https://programmers.co.kr/learn/courses/30/lessons/64065

COMMENT:
입력값을 문자열 배열이 아닌 숫자 배열 형태로 만든다.
reduce 초기값으로 []을 정해주고 acc, cur를 비교해 새로운 값이면 푸시를 반복한다.
*/

function solution(s) {
  // "{{2},{2,1},{2,1,3},{2,1,3,4}}"
  let arr = s
    .slice(2, s.length - 2)
    .split('},{') // ["2", "2,1", "2,1,3", "2,1,3,4"]
    .map((str) => str.split(',').map((v) => Number(v))); // [[2], [2, 1], [2, 1, 3], [2, 1, 3, 4]]

  arr.sort((a, b) => a.length - b.length);

  let result = arr.reduce((acc, cur) => {
    let value = cur.filter((v) => !acc.includes(v))[0];
    acc.push(value);
    return acc;
  }, []);

  return result;
}
