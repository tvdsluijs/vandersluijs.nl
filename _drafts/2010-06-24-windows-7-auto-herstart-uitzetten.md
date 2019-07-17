---
id: 286
title: Windows 7 Auto herstart uitzetten
date: 2010-06-24T12:59:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2010/06/24/windows-7-auto-herstart-uitzetten/
permalink: /2010/06/windows-7-auto-herstart-uitzetten.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "4605048516877178321"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2010/06/windows-7-auto-herstart-uitzetten.html
hits:
  - "2003"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5803567540"
categories:
  - Tech
tags:
  - Windows
---
Wat een hekel heb ik aan die automatische zaken in Microsoft Windows 7. Tuurlijk zal het een goede reden hebben dat Windows 7 bij iedere automatische update wil herstarten. Maar als mijn pc bezig is met iets belangrijks waarbij ik niet aanwezig ben, zoals het renderen van een film ofzo, dan wil ik niet dat hij even doodleuk automatisch gaat herstarten na de installatie van een update.

Dus… heb jij ook een bloedje hekel aan zo’n automatische Windows 7 herstart na een update lees dan even verder.

Okay… het is vrij eenvoudig om die automatische windows 7 herstart uit te zetten.

Klik op de start knop in windows 7. Je weet wel dat is dat ronde windows 7 icoontje op je menu balk links onder in je scherm.

Type het volgende onder in het invoer veld (het invoer veld is waar je “programa’s en bestanden zoeken” ziet staan) : “gpedit.msc” (zonder “ quotes)

Nu opent het zogenaamde “Local Group Policy Editor” / “Editor voor lokaal groepsbeleid” zich.

Ga in het linker deel op zoek naar 

Beleid voor lokale computer Computer configuratie Beheersjablonen Windows onderdelen Windows update 

In de rechter kant zoek je op 

“Niet automatisch opnieuw opstarten als gebruikers zijn aangemeld na geplande installaties van Automatische updates”

Dubbelklik hierop. Je krijg nu het volgende scherm te zien

Klik op “Ingeschakeld”.

Klik op “OK”.

Sluit het “Editor voor lokaal groepsbeleid” venster.

Klaar !