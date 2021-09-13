/*
ABOUT

DATE: 2021-09-13

URL: https://programmers.co.kr/learn/courses/30/lessons/59408

COMMENT:
DISTINCT를 이용해 중복을 제거한다.
IS NOT으로 NULL인 경우를 제외한다.
*/

SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS
WHERE NAME IS NOT NULL;