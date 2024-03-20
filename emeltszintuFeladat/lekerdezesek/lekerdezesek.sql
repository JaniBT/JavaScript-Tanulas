A feladatok megoldására elkészített SQL parancsokat illessze be a feladat sorszáma után!
***
14. feladat
create database csudijo
character set utf8
collate utf8_hungarian_ci
***
16. feladat
select count(etel) as 'etelek-szama' from termekek
where etel = 1
***
17. feladat
select termekek.nev, termekek.ar from termekek
inner join kategoriak on kategoriak.id = termekek.kategoriaId
where kategoriak.id = 6
***
18. feladat
insert into termekek
(nev, ar, kategoriaId, etel)
value
("Málnahabos pohárkrém", 1090, 6, 1)
***
19. feladat
select rendelesek.termekNev, sum(rendelesek.mennyiseg) as mennyiseg from rendelesek
inner join termekek on termekek.nev = rendelesek.termekNev
where termekek.kategoriaId < 7
group by termekNev
order by mennyiseg desc
limit 3
***
20. feladat

