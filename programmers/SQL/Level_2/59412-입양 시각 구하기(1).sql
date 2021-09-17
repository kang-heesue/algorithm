/*
ABOUT

DATE: 2021-09-16

URL: https://programmers.co.kr/learn/courses/30/lessons/59412

COMMENT:
HOUR(DATETIME)에서 HOUR는 산술 함수여서 HAVING 절에 HOUR(DATETIME)으로 쓰면
Unknown column 'DATETIME' in 'having clause'이라는 오류가 뜬다.
Aliases를 이용해 별칭으로 HOUR라고 하고 HOUR를 이용했다.
*/

SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME))
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR BETWEEN 9 AND 19
ORDER BY HOUR;