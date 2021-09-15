/*
ABOUT

DATE: 2021-09-15

URL: https://programmers.co.kr/learn/courses/30/lessons/59409

COMMENT:
CASE문을 이용했는데 중성화가 아닌 경우가 더 간단하므로 그 경우를 구하고 ELSE로 중성화된 경우를 처리한다.
*/

SELECT ANIMAL_ID, NAME, 
CASE
    WHEN SEX_UPON_INTAKE LIKE 'Intact%' THEN 'X'
    ELSE 'O'
END
FROM ANIMAL_INS;