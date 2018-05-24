---
id: 218
title: Mysql Tabel legen en Auto-increment op 0 zetten
date: 2011-11-26T03:39:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2011/11/26/mysql-tabel-legen-en-auto-increment-op/
permalink: /blog/2011/11/mysql-tabel-legen-en-auto-increment-op.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "5174774721055636148"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2011/11/mysql-tabel-legen-en-auto-increment-op.html
hits:
  - "1094"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5847067262"
categories:
  - Tech
---
Vaak wil je een MySQL tabel even snel legen en de auto increment terug naar 0 zetten.

Dit kan door alle rijen te legen en daarna de tabel te “alteren” (aan te passen) door handmatig de autoincrement weer naar 0 te zetten maar het kan eenvoudiger.

Het legen van een tabel en het verserven of op 0 zetten van een auto-increment veld doe je door de volgende regel SQL uit te voeren op je database

TRUNCATE TABLE naam_van_tabel;

Hiermee verwijder in je in 1x alle records uit je tabel en zet je de auto increment van je veld weer op 0 / het begin punt)