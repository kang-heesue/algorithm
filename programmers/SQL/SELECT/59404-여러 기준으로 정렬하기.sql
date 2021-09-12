/*
ABOUT

DATE: 2021-09-12

URL: https://programmers.co.kr/learn/courses/30/lessons/59404

COMMENT:
여러 기준으로 정렬할 때는 ORDER BY 다음에 여러 조건으로 나열한다.
*/

SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC;