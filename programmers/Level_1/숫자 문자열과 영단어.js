/*
ABOUT

DATE: 2021-07-26

URL: https://programmers.co.kr/learn/courses/30/lessons/81301

COMMENT:
숫자로 바꿀 수 있는 영단어는 정규식을 이용해 변경한다.
*/

function solution(s) {
  var answer = 0;
  s = s.replace(/one/g, '1');
  s = s.replace(/two/g, '2');
  s = s.replace(/three/g, '3');
  s = s.replace(/four/g, '4');
  s = s.replace(/five/g, '5');
  s = s.replace(/six/g, '6');
  s = s.replace(/seven/g, '7');
  s = s.replace(/eight/g, '8');
  s = s.replace(/nine/g, '9');
  s = s.replace(/zero/g, '0');

  s = Number(s);

  return s;
}

// 정규표현식을 사용하지 않는 코드
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
