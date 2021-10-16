/*
ABOUT

DATE: 2021-10-16

URL: https://programmers.co.kr/learn/courses/30/lessons/77487

COMMENT:
HOST_ID에 따라 구분해 아이디가 2개 이상이면 공간을 둘 이상 등록한 사람이다.
IN을 이용해서 이 사람들 중 정렬을 하고 값을 구한다.
*/

SELECT *
FROM PLACES
WHERE HOST_ID
IN(
    SELECT HOST_ID
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(ID) >= 2
)
ORDER BY ID ASC;