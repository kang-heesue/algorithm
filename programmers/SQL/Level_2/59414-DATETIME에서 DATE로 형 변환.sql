/*
ABOUT

DATE: 2021-09-17

URL: https://programmers.co.kr/learn/courses/30/lessons/59414

COMMENT:
DATETIME을 년-월-일 형태로 출력해야하는데, 시분초를 지우기 위해 DATE_FORMAT을 이용해야 한다.
출력 형태와 같게 '%Y-%m-%d'를 이용한다.
*/

SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d')
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
