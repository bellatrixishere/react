--1
select
  genre_id,
  count(name)
from
  track
group by
  genre_id
order by
  genre_id desc;

select
  genre_id,
  count(name)
from
  track
group by
  genre_id
limit
  1;

select
  genre_id,
  count(name)
from
  track
group by
  genre_id
having
  count(name) > 100
order by
  genre_id desc;

select
  *
from
  invoice;

select
  count(total) as quantas_faturas,
  customer_id as idcliente
from
  invoice
group by
  idcliente
having
  count(total) > 5
order by
  idcliente desc;

--------------------------------------------------------------------------------

SELECT
  customer_id,
  SUM(invoice_id) AS faturamento_total,
  AVG(invoice_id) AS ticket_medio
FROM
  invoice
GROUP BY
  customer_id
HAVING
  AVG(invoice_id) > 5
ORDER BY
  faturamento_total DESC;


select c."FistName", c."LastName",
from "Costumer" c
left join "Invoice" i 
on c."CustomerId" = i."CustomerId"
where i."invoiceId" is null;














