/*
ABOUT

DATE: 2021-08-25

URL: https://programmers.co.kr/learn/courses/30/lessons/42888

COMMENT:
record를 map으로 배열 형태로 바꾸고 새 객체를 선언한다.
새 객체에 아이디와 닉네임을 넣어주는데, 변경되는 경우도 배열의 길이가 3이므로 변경사항이 적용된다.
이후 들어왔는지, 나갔는지만 나누어 출력해준다.
*/

function solution(record) {
  const answer = [];
  const arr = record.map((str) => str.split(' '));
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      obj[arr[i][1]] = arr[i][2];
      // change의 경우도 여기서 바뀜.
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'Enter') {
      answer.push(obj[arr[i][1]] + '님이 들어왔습니다.');
    } else if (arr[i][0] === 'Leave') {
      answer.push(obj[arr[i][1]] + '님이 나갔습니다.');
    }
  }
  return answer;
}

// Map 객체를 이용한 코드
function solution(record) {
  const answer = [];
  const map = new Map();

  record.map((str) => {
    const [status, id, nickname] = str.split(' ');
    if (status === 'Enter' || status === 'Change') map.set(id, nickname);
    if (status === 'Enter' || status === 'Leave') answer.push({ id, status });
  });

  return answer.map((el) => {
    switch (el.status) {
      case 'Enter':
        return `${map.get(el.id)}님이 들어왔습니다.`;
        break;
      case 'Leave':
        return `${map.get(el.id)}님이 나갔습니다.`;
        break;
    }
  });
}
