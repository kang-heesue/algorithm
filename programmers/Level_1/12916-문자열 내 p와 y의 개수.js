/*
ABOUT

DATE: 2021-07-27

URL: https://programmers.co.kr/learn/courses/30/lessons/12916

COMMENT:
대문자와 소문자 구별이 없으므로 모두 소문자로 만든다.
이때, toLowerCase()는 원본 문자열에 영향을 주지 않음을 주의한다.
p와 y의 개수를 비교한다.
*/

function solution(s) {
  let answer = false;
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < s.length; i++) {
    s = s.toLowerCase();
    if (s[i] === 'p') {
      pCount++;
    }
    if (s[i] === 'y') {
      yCount++;
    }
    if (pCount === yCount || (pCount === 0 && yCount === 0)) {
      answer = true;
    } else {
      answer = false;
    }
  }
  return answer;
}

// 간결한 코드
function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
