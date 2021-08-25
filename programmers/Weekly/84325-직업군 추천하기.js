/*
ABOUT

DATE: 2021-08-25

URL: https://programmers.co.kr/learn/courses/30/lessons/84325

COMMENT:
주어지는 table은 항상 같으므로 2차원 배열 형태로 만들어 새로 선언한다.
테이블 리스트에 언어가 없는 경우를 제외하기 위해 indexOf를 사용한다.
tempNum과 maxNum을 비교해 maxLanguage를 구한다.
*/

function solution(table, languages, preference) {
  let answer = '';
  let maxNum = 0;
  let maxLanguage = [];
  let tableList = [
    ['SI', 'JAVA', 'JAVASCRIPT', 'SQL', 'PYTHON', 'C#'],
    ['CONTENTS', 'JAVASCRIPT', 'JAVA', 'PYTHON', 'SQL', 'C++'],
    ['HARDWARE', 'C', 'C++', 'PYTHON', 'JAVA', 'JAVASCRIPT'],
    ['PORTAL', 'JAVA', 'JAVASCRIPT', 'PYTHON', 'KOTLIN', 'PHP'],
    ['GAME', 'C++', 'C#', 'JAVASCRIPT', 'C', 'JAVA'],
  ];

  for (let i = 0; i < tableList.length; i++) {
    let tempNum = 0;
    for (let j = 0; j < languages.length; j++) {
      if (tableList[i].indexOf(languages[j]) > 0) {
        tempNum += preference[j] * (6 - tableList[i].indexOf(languages[j]));
      }
    }
    if (tempNum > maxNum) {
      maxNum = tempNum;
      maxLanguage = [tableList[i][0]];
    } else if (tempNum === maxNum) {
      maxLanguage.push(tableList[i][0]);
    }
    maxLanguage.sort();
    answer = maxLanguage[0];
  }
  return answer;
}
