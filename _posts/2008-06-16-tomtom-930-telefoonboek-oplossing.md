---
id: 510
title: TomTom 930 Telefoonboek oplossing
date: 2008-06-16T07:00:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/06/16/tomtom-930-telefoonboek-oplossing/
permalink: /2008/06/tomtom-930-telefoonboek-oplossing.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "4586991582874646065"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/06/tomtom-930-telefoonboek-oplossing.html
hits:
  - "806"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5951642289"
categories:
  - Tech
---
Zoals je weet heb ik een probleem met mijn TomTom 930 HD Traffic.

Hij wil namelijk met geen mogelijkheid mijn telefoonboek meer ophalen.

Helaas geeft de Helpdesk van TomTom ook geen antwoord (ze zullen het wel druk hebben) dus ben ik zelf maar op zoek gegaan naar een antwoord.

En ik heb er 1 gevonden. Het blijkt dat TomTom zelf een bestandje aanmaakt met geïmporteerde telefoon nummers met namen.

Dit bestandje zet hij op een door hem te lezen plaats op zijn interne geheugen.

En…. wij kunnen dit bestandje ook voor hem maken !

De oplossing:

Exporteer je contactpersonen vanuit je telefoon naar een txt bestand (of excel of csv).

Zorg er daarna voor dat dit bestand een txt bestand wordt (excel kan je exporteren)

en noem het bestand : “contacts.txt” zonder ” (quotes).

In dit bestand moeten je contactpersonen met telefoonnummers er als volgt uit zien:

“Andre Haasus”,”+317801123456”

“Winston Gerstennobitch”,”+317801456123”

“Fraukje der Bot”,”+317801111222”

“Katje Schuurspons”,”+317801112233”

“Paul de Tijger”,”+317801114332”

(met “ quotes en komma tussen persoon en telefoonnummer)

Je kan natuurlijk voornaam achternaam omdraaien, wat je zelf wilt. Tussenvoegsel er tussen ook geen probleem.

(+31 is in dit geval het land nummer / 31 is nederland. als je land  
nummer gebruikt wat wel aan te raden is laat dan de eerste 0 van het  
telefoon nummer weg)

Zet dit bestand via TomTom Home in de contacts folder/directory van de TomTom.

Als deze folder/directory niet bestaat maak hem dan aan.

Als het bestand correct (dus zoals hierboven gedefinieërd) is dan zal  
TomTom het herkennen als je telefoonboek voor inkomende/uitgaande  
telefoontjes en berichten.

Het is wat omslachtig maar het werkt. Een voordeel van deze manier is  
dat je je telefoonboek ook kan uitbreiden met telefoon nummers die niet  
in je mobiel staan. Alhoewel ik me eigenlijk niet kan voorstellen  
waarom je bepaalde nummers wel in je TomTom wilt en niet in je Mobiel.

Let op: het kan een paar keer uit en aan zetten of 1x reset kosten voor TomTom de gegevens ziet. 

Success