/*
ABOUT

DATE: 2021-09-12

URL: https://programmers.co.kr/learn/courses/30/lessons/59037

COMMENT:
'Aged'가 아닌 경우이므로 <>을 이용한다.
*/

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION <> 'Aged';