---
id: 526
title: XP installatie op Vista PC
date: 2007-10-18T16:06:00+00:00
author: Theo van der Sluijs
excerpt_separator: '<!--more-->'
layout: post
guid: http://vandersluijs.nl/blog/index.php/2007/10/18/xp-installatie-op-vista-pc/
permalink: /2007/10/xp-installatie-op-vista-pc.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "642022953891025521"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2007/10/xp-installatie-op-vista-pc.html
hits:
  - "1584"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Microsoft Vista Zuigt !… nou okay niet helemaal, maar Vista is zeker geen compleet foutvrij besturingssysteem.

Ik denk dat Microsoft de hete adem van Linux / Ubuntu in de nek voelde, en met alle artikelen over de Vista uitstel problemen heeft Microsoft gewoon deze ME (Millinium) op de markt moeten brengen.

Ik heb een Dell pc…. een Dimension 9200 om precies te zijn.

En… daar staat natuurlijk Vista op. Ik heb Vista al heel vaak er op geïnstalleerd, maar het werkt gewoon niet goed.

Ik heb ook XP geprobeerd te installeren, maar krijg alleen maar BSOD (Blue Screen Of Death).

Ik heb ook Ubuntu geïnstalleerd… maar die vind mijn Dimension ook niet leuk.

Steeds meer mensen proberen te downgraden van Vista naar XP. Ha… zelfs de Consumentenbond, Kassa en andere consument organisaties zeggen dat je beter XP kan gebruiken dan Vista.

Maar….. ik kan niet downgraden naar XP…… nou ja…. ik KON niet downgraden naar XP…. en nu kan ik het wel…. Jij OOK !

Hier is DE simpele oplossing (werkt wellicht ook op Niet Dell computers):

Stap 1) Start de PC, en ga naar de BIOS(Op een DImension 9200, druk F12 gelijk nadat je de pc hebt aangezet)

Stap 2) Ga naar “Device Setup”

Stap 3) Scroll naar beneden naar “Sata” onderdeel en ga naar “Sata Operation.”

Stap 4) Verander de installingen naar “RAID Autodetect/ATA.”

Klaar. Je kan nu je hardeschijf formateren en XP installeren (Of Linux/Ubuntu) zonder problemen.

Dit proces zou moeten werken op alle nieuwe pc’s die ingesteld zijn met Raid Autodetect/ATA op uit.

Veel Succes !!!!!!

Heb je nog steeds last van BSOD ? Dan heb je misschien de Dell RAID drivers nodig tijdens de XP installatie.

Ten eerste probeer de Drivers vanaf een USB stick te laden (Wellicht moet je dit aanzetten in de BIOS).

Als je ze niet kan laden vanaf USB stick, dan is de enige optie het Slipstreamen van een XP installatie CD, inclusief RAID drivers.

Hoe ? Dat lees je hier .