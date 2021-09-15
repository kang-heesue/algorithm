/*
ABOUT

DATE: 2021-09-15

URL: https://programmers.co.kr/learn/courses/30/lessons/59047

COMMENT:
el이 들어가는지 LIKE를 통해 확인하고, 그 중 개만 찾아야 한다.
*/

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE NAME LIKE '%el%'
AND ANIMAL_TYPE = 'Dog'
ORDER BY NAME;