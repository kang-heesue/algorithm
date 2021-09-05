/*
ABOUT

DATE: 2021-09-03

URL: https://programmers.co.kr/learn/courses/30/lessons/17677

COMMENT:
자카드 유사도를 구하려면 교집합, 합집합을 구해야 하므로 새 배열을 선언한다.
영문자로 된 글자 쌍만 유효하므로 정규식으로 테스트를 한다.
str1, str2 모두 두 글자씩 끊어 다중집합을 만든다.
교집합을 구하고 차집합을 이용해 합집합을 구한다.
*/

function solution(str1, str2) {
  let answer = 0;
  let arr1 = [];
  let arr2 = [];
  let intersect = [];
  let union = [];
  let regEx = /^[a-zA-Z]+$/;

  for (let i = 0; i < str1.length - 1; i++) {
    let subStr1 = str1.toLowerCase().substring(i, i + 2);
    if (regEx.test(subStr1)) {
      arr1.push(subStr1);
    }
  }

  for (let j = 0; j < str2.length - 1; j++) {
    let subStr2 = str2.toLowerCase().substring(j, j + 2);
    if (regEx.test(subStr2)) {
      arr2.push(subStr2);
    }
  }

  for (let k = 0; k < arr2.length; k++) {
    if (arr1.indexOf(arr2[k]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[k]), 1));
    }
    union.push(arr2[k]);
  }

  for (let k = 0; k < arr1.length; k++) {
    union.push(arr1[k]);
  }

  if (union.length === 0) {
    answer = 65536;
  } else {
    answer = Math.floor((intersect.length / union.length) * 65536);
  }
  return answer;
}
