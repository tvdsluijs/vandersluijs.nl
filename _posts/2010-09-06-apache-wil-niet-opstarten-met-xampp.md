---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2010-09-06 23:12:00+00:00
dsq_thread_id:
- '5800776685'
hits:
- '1331'
layout: post
permalink: /2010/09/apache-wil-niet-opstarten-met-xampp.html
title: Apache wil niet opstarten met Xampp

---
Heb je Xampp geinstaleerd ? En wil apache met geen mogelijkheid opstarten ?

Kijk dan eens of je poort wel vrij is waarop apache draait.

Dat is standaard poort 80.

Je kan heel eenvoudig een check doen of de poort vrij is.

Ga met de verkenner naar de installatie directory van Xampp.

Hierin zie je de volgende applicatie staan : xampp-portcheck.exe

Dubbel klik hierop en nu krijg je een commandline scherm (dos-box) te zien waarin xampp gaat kijken welke applicatie’s er op de poorten zitten.

Wellicht staat er dat IIS poort 80 in neemt, dan zal je een afweging moeten maken of je apache niet op poort 8080 wil laten draaien.

Maar het kan ook zijn dat SKYPE jou poort 80 inneemt.

Dat is vrij eenvoudig op te lossen.

Ga naar SKYPE.

Open het menu 

Extra -> Instellingen

Ga dan naar :

Geavanceerd –> Verbinding

En vink het vakje uit bij 

Gebruik poort 80 en 443 als alternatief voor inkomnede verbindingen.

Vergeet niet even SKYPE te herstarten.

Nadat je SKYPE hebt herstart kan je vanuit de XAMPP control panel apache nu wel opstarten.