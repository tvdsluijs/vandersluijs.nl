---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2012-04-23 21:39
excerpt_separator: <!--more-->
layout: post
publish_date: 2012-04-23 21:39
slug: ip-adressen-opslaan-in-mysql
tags:
- Coding
title: IP adressen opslaan in Mysql

---
IP adressen opslaan in Mysql? Het kan maar dan moet je wel weten wat de beste
manier is.  
  
Het is niet handig om het IP adres op te slaan als string omdat je daar niet
goed in kan zoeken. Of daar tussen zoeken gaat al niet echt goed (met
bijvoorbeeld IN BETWEEN).  
  
Maar er is een manier waarmee je IP adressen kan opslaan op een manier waar je
wel goed in kan zoeken.  
  
IPv4 adressen zijn 4 bytes lang, dus kan je (UNSIGNED) INT gebruiken die
exact4 bytes zijn:  
  
ipv4 UNSIGNED INT  
  
Gebruik INET _ATON en INET_ NTOA om ze te converteren:  
  
INSERT INTO table (ipv4) VALUES (INET _ATON(“127.0.0.1”));  
SELECT INET_NTOA(ipv4) FROM table;  
  
Voor IPv6 adressen moet je BINARY gebruiken:  
  
ipv6 BINARY(16)  
  
Als je de php manier zoekt om IP adressen te converteren kan je inet _pton en
inet_ ntop gebruiken:  
  
‘INSERT INTO table (ipv6) VALUES (“‘.mysql _real_ escape _string(inet_
pton(‘2001:4860:a005::68’)).’”)’  
‘SELECT ipv6 FROM table’  
$ipv6 = inet_pton($row[‘ipv6’]);

