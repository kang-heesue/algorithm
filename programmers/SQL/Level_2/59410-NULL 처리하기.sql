/*
ABOUT

DATE: 2021-09-15

URL: https://programmers.co.kr/learn/courses/30/lessons/59410

COMMENT:
NAME이 NULL인 경우를 CASE로 처리해준다.
*/

SELECT ANIMAL_TYPE,
CASE
    WHEN NAME IS NULL THEN 'No name'
    ELSE NAME
END,
SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;