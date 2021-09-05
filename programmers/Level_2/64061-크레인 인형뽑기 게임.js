/*
ABOUT

DATE: 2021-09-03

URL: https://programmers.co.kr/learn/courses/30/lessons/64061

COMMENT:
바구니 역할로 stack을 선언한다.
2차원 배열인데 각 라인별로 정리되어 있지 않기 때문에 이중 for문으로 j 인덱스를 먼저 뽑아서 사용한다.
board[j][moves[i] - 1]이 0이라면 인형이 없는 경우이다.
0이 아닌 경우엔 stack의 가장 위 인형을 temp에 저장해두고 temp와 비교해 같으면 인형을 터뜨린다. (answer += 2)
*/

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let temp = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (temp === board[j][moves[i] - 1]) {
          answer += 2;
          if (stack.length > 0) {
            stack.pop();
            temp = stack[stack.length - 1];
          } else {
            temp = 0;
          }
        } else {
          stack.push(board[j][moves[i] - 1]);
          temp = board[j][moves[i] - 1];
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

// 간결한 코드 (temp 없이 쓰는 것이 더 간결하고 직관적이다.)
function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (stack[stack.length - 1] === board[j][moves[i] - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

// 행과 열을 뒤바꾼 코드 (reduce를 이용해 미리 바꿔준다.)
const transpose = (matrix) => matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);
// board => [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
// transpose(board) => [[0, 0, 0, 4, 3], [0, 0, 2, 2, 5], [0, 1, 5, 4, 1], [0, 0, 0, 4, 3], [0, 3, 1, 2, 1]]
