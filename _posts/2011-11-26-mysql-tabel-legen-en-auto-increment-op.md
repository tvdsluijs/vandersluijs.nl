---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2011-11-26 03:39:00+00:00
dsq_thread_id:
- '5847067262'
hits:
- '1094'
layout: post
permalink: /2011/11/mysql-tabel-legen-en-auto-increment-op.html
title: Mysql Tabel legen en Auto-increment op 0 zetten

---
Vaak wil je een MySQL tabel even snel legen en de auto increment terug naar 0 zetten.

Dit kan door alle rijen te legen en daarna de tabel te “alteren” (aan te passen) door handmatig de autoincrement weer naar 0 te zetten maar het kan eenvoudiger.

Het legen van een tabel en het verserven of op 0 zetten van een auto-increment veld doe je door de volgende regel SQL uit te voeren op je database

TRUNCATE TABLE naam_van_tabel;

Hiermee verwijder in je in 1x alle records uit je tabel en zet je de auto increment van je veld weer op 0 / het begin punt)