--- selct sun total

select first_name as nome, last_name as sobrenome, coutry as pais from customer
where coutry in ('Brasil', 'Canada', 'France')
order by sobrenome;

---2
select name as Nome, milliseconds as duração from track
where milliseconds between  240000 and 360000
order by milliseconds desc
---3
select count(*) from track
where composer is null

------------------------------------------------------------------------------

select billing_coutry as pais_de_compra,
sum(total) as faturamento_total,
count(invoice_id) as total_de_faturas 
round(avg(total), 2) as ticket_medio
from 
 invoice
 where billing_coutry in ('Brazil', 'Canada', 'France')
group by pais_de_compra
having sum(total) > 100
order by faturamento_total desc

-------------------------------------------------------------------------------
