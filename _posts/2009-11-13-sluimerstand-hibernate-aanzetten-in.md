---
id: 362
title: Sluimerstand / Hibernate aanzetten in Windows 7
date: 2009-11-13T20:29:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2009/11/13/sluimerstand-hibernate-aanzetten-in/
permalink: /2009/11/sluimerstand-hibernate-aanzetten-in.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "5740558704953994810"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2009/11/sluimerstand-hibernate-aanzetten-in.html
hits:
  - "3063"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5701360670"
categories:
  - Tech
tags:
  - Windows
---
In XP of in Vista was je al bekend met het zogenaamde Hibernaten of in Sluimerstand zetten van je pc.

Voor de duidelijkheid: wat in windows XP nog slaapstand is in Vista en Windows 7 sluimerstand.   
Als je de computer in sluimerstand in vista of in slaapstand onder xp zet, dan wordt al het werkgeheugen naar je hardschijf geschreven inclusief de geopende programma’s. Omdat je dan het geheugen/RAM pernament op je hardschijf hebt staan kun je de stekker van je pc uit het stopcontact trekken. Er is geen stroom nodig om de gegevens op je hardschijf te bewaren.

Nu je Windows 7 op je PC hebt staan… zoek je je vast rot naar de sluimerstand. Hieronder staat hoe je hem weer bij je afsluiten knop kan zetten.

1. Open een Command Promt met Administrator Rechten. Dit doe je door CMD in het start menu te typen. 

En daarna direct CTRL + SHIFT + ENTER in te geven op het toetsenbord.

Nu krijg je de Command Prompt te zien. 

2. Daarna, type het volgende / onderstaande commando en druk op ENTER:

powercfg /hibernate on

3. Type exit en druk op ENTER, om de Command Prompt te sluiten.

4. Als je de sluimerstand nu nog steeds niet ziet in het start menu doe het volgende:

A. Type Power Options / Energiebeheer (kies Energiebeheer als je windows 7 een NL versie is) in Start menu en druk op ENTER. 

Je krijgt hierna het volgende scherm te zien: 

B. Klik op Change Plan Settings / De Schema instellingen Wijzigen aan de rechter kant van het scherm.

C. Klik daarna op Change advanced Power Settings / Geavanceerde Energie instellingen Wijzigen. 

D. Zoek dan naar Sleep / Slaapstand en klap deze open. 

E. Klap daarna Allow hybrid Sleep / Hybride Slaaptoestand toestaan open

En schakel deze uit.

Nu heb je weer de sluimerstand in je start menu naast het afsluiten staan.