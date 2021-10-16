/*
ABOUT

DATE: 2021-10-16

URL: https://programmers.co.kr/learn/courses/30/lessons/59413

COMMENT:
시간을 0시부터 23시까지 조회해야 해서 난이도가 있었다.
SET을 이용해 변수를 설정한다.
변수를 1씩 더해준 값으로 HOUR에 할당하고, HOUR(DATETIME)이 그 변수와 같은 값을 COUNT로 설정한다.
변수로 설정한 @HOUR가 23보다 작을 때까지 반복한다.
*/

SET @HOUR = -1;
SELECT (@HOUR := @HOUR + 1) AS HOUR,
(
    SELECT COUNT(*)
    FROM ANIMAL_OUTS
    WHERE HOUR(DATETIME) = @HOUR
) AS COUNT
FROM ANIMAL_OUTS
WHERE @HOUR < 23