/*
ABOUT

DATE: 2021-09-15

URL: https://programmers.co.kr/learn/courses/30/lessons/59046

COMMENT:
IN을 이용해 특정 이름을 체크하고 ANIMAL_ID로 정렬한다.
*/

SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY ANIMAL_ID;