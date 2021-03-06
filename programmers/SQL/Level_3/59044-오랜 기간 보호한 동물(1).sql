/*
ABOUT

DATE: 2021-10-15

URL: https://programmers.co.kr/learn/courses/30/lessons/59044

COMMENT:
ANIMAL_OUTS 테이블의 DATETIME이 NULL이면 입양을 못 간 동물이다.
보호 시작일 순으로 정렬한 후 3마리만 조회한다.
*/

SELECT ANIMAL_INS.NAME, ANIMAL_INS.DATETIME
FROM ANIMAL_INS
LEFT JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
WHERE ANIMAL_OUTS.DATETIME IS NULL
ORDER BY ANIMAL_INS.DATETIME
LIMIT 3;