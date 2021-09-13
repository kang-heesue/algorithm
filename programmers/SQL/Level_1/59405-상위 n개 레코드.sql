/*
ABOUT

DATE: 2021-09-12

URL: https://programmers.co.kr/learn/courses/30/lessons/59405

COMMENT:
DATETIME 컬럼을 기준으로 정렬한 후 1개만 뽑아야 하므로 LIMIT을 이용한다.
*/

SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1;