---
layout: post
excerpt_separator: '<!--more-->'
title: 'MySQL veld Autoincrement resetten'
slug: 'mysql-veld-autoincrement-resetten'
date: '2009-06-11 12:14'
publish_date: '2009-06-11 12:14'
category: ['Coding']
tags: ['Coding']
---
Heb je dat ook wel eens. Ben je een dbase in MYSQL aan het maken en aan het
vullen, kom je er achter dat je bij het vullen iets fout hebt gedaan.  
  
Tja dat kan gebeuren. Maar je auto increment veld is nu wel automatisch
opgehoogd.  
  
Als je die weer bij 1 wilt laten beginnen, zonder ook nog eens je tabel
opnieuw te moeten opbouwen, is er 1 simpelen regel waarmee je het
autoincrement veld terug op 1 zet.  
  
ALTER TABLE tablename AUTO_INCREMENT = 1  
  
Gewoon als query ingeven, wel even de juiste tabel naam er in zetten.  
  
Run Query, en klaar !

