/*
ABOUT

DATE: 2021-10-16

URL: https://programmers.co.kr/learn/courses/30/lessons/62284

COMMENT:
Milk를 구입한 장바구니와 Yogurt를 구입한 장바구니를 각각 조회하고
WHERE로 CART_ID가 같은지 비교한다.
*/

SELECT A.CART_ID
FROM
(
    SELECT CART_ID
    FROM CART_PRODUCTS
    WHERE NAME = 'Yogurt'
) AS A
, (
    SELECT CART_ID
    FROM CART_PRODUCTS
    WHERE NAME = 'Milk'
) AS B
WHERE A.CART_ID = B.CART_ID
