/*
ABOUT

DATE: 2021-09-05

URL: https://programmers.co.kr/learn/courses/30/lessons/17683

COMMENT:
음에 #이 포함되어 있는 문자들을 한 글자로 바꾼다.
musicinfos의 제목과 음을 키와 값으로 갖는 객체를 만든다.
객체를 모두 돌며 m이 들어있는지 확인해 제목을 구한다.
*/

function solution(m, musicinfos) {
  // ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]
  let answer = [];
  let obj = {};

  for (let i = 0; i < musicinfos.length; i++) {
    // i = 0일 때
    let [start, end, title, note] = musicinfos[i].split(','); // ["12:00", "12:14", "HELLO", "CDEFGAB"]
    let hour = end.slice(0, 2) - start.slice(0, 2); // 0
    let min = end.slice(3) - start.slice(3); // 14
    let time = hour * 60 + min; // 14
    let str = '';

    note = note
      .replace(/(C#)/g, 'c')
      .replace(/(D#)/g, 'd')
      .replace(/(F#)/g, 'f')
      .replace(/(G#)/g, 'g')
      .replace(/(A#)/g, 'a');

    m = m.replace(/(C#)/g, 'c').replace(/(D#)/g, 'd').replace(/(F#)/g, 'f').replace(/(G#)/g, 'g').replace(/(A#)/g, 'a');

    for (var j = 0; j < time; j++) {
      str += note[j % note.length];
    }
    obj[title] = str;
  }

  for (let key in obj) {
    if (obj[key].indexOf(m) >= 0) {
      if (answer.length === 0) {
        answer = [key, obj[key].length];
      }
      if (obj[key].length > answer[1]) {
        answer = [key, obj[key].length];
      }
    }
  }

  if (answer.length > 0) {
    return answer[0];
  }
  return '(None)';
}
console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
