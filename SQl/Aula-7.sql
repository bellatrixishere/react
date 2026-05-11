SELECT
  concat(c.first_name,' ',c.last_name) AS nome_completo,
  SUM(p.total) AS total_gasto
FROM
  customer c
inner join
  invoice p ON c.customer_id = p.customer_id
GROUP BY
  c.customer_id, c.first_name, c.last_name
ORDER BY
  total_gasto DESC;

------------------------------------------------------------------------------------------------------------------------------------------------------------------

SELECT t.album_id
FROM track t
LEFT JOIN album a ON a.album_id = t.album_id
WHERE a.album_id IS NULL;

------------------------------------------------------------------------------------------------------------------------------------------------------------------

SELECT
  g.name AS genero,
  SUM(il.quantity) AS total_faixas_vendidas
FROM
  invoice_line il
JOIN
  track t ON il.track_id = t.track_id
JOIN
  genre g ON t.genre_id = g.genre_id
GROUP BY
  g.name
ORDER BY
  total_faixas_vendidas DESC;